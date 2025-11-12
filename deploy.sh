#!/bin/bash
# AI Service Hub Presentation - Azure Deployment Script
# This script deploys the presentation to Azure Static Web Apps using Bicep

set -e

# Add Python user bin to PATH (for Azure CLI installed via pip)
export PATH="$HOME/Library/Python/3.9/bin:$PATH"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
NC='\033[0m' # No Color

# Default parameters
RESOURCE_GROUP_NAME="${RESOURCE_GROUP_NAME:-rg-ai-service-hub-presentation}"
LOCATION="${LOCATION:-westeurope}"
SKIP_BUILD="${SKIP_BUILD:-false}"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    -g|--resource-group)
      RESOURCE_GROUP_NAME="$2"
      shift 2
      ;;
    -l|--location)
      LOCATION="$2"
      shift 2
      ;;
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    -h|--help)
      echo "Usage: ./deploy.sh [OPTIONS]"
      echo ""
      echo "Options:"
      echo "  -g, --resource-group NAME    Resource group name (default: rg-ai-service-hub-presentation)"
      echo "  -l, --location LOCATION      Azure region (default: westeurope)"
      echo "  --skip-build                 Skip npm build step"
      echo "  -h, --help                   Show this help message"
      echo ""
      echo "Example:"
      echo "  ./deploy.sh -g my-resource-group -l westeurope"
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      echo "Use -h or --help for usage information"
      exit 1
      ;;
  esac
done

echo -e "${CYAN}==================================================${NC}"
echo -e "${CYAN}AI Service Hub Presentation - Azure Deployment${NC}"
echo -e "${CYAN}==================================================${NC}"
echo ""

# Check if Azure CLI is installed
echo -e "${YELLOW}Checking Azure CLI installation...${NC}"
if command -v az &> /dev/null; then
    AZ_VERSION=$(az version --query '"azure-cli"' -o tsv)
    echo -e "${GREEN}✓ Azure CLI version: ${AZ_VERSION}${NC}"
else
    echo -e "${RED}✗ Azure CLI is not installed!${NC}"
    echo -e "${RED}Please install Azure CLI from: https://docs.microsoft.com/cli/azure/install-azure-cli${NC}"
    exit 1
fi

# Check if logged in to Azure
echo -e "${YELLOW}Checking Azure login status...${NC}"
if az account show &> /dev/null; then
    ACCOUNT_NAME=$(az account show --query "user.name" -o tsv)
    SUBSCRIPTION_NAME=$(az account show --query "name" -o tsv)
    SUBSCRIPTION_ID=$(az account show --query "id" -o tsv)
    echo -e "${GREEN}✓ Logged in as: ${ACCOUNT_NAME}${NC}"
    echo -e "${GRAY}  Subscription: ${SUBSCRIPTION_NAME} (${SUBSCRIPTION_ID})${NC}"
else
    echo -e "${RED}✗ Not logged in to Azure!${NC}"
    echo -e "${YELLOW}Initiating Azure login...${NC}"
    az login
    if [ $? -ne 0 ]; then
        echo -e "${RED}✗ Azure login failed!${NC}"
        exit 1
    fi
fi

# Check if Node.js and npm are installed
if [ "$SKIP_BUILD" = false ]; then
    echo ""
    echo -e "${YELLOW}Checking Node.js installation...${NC}"
    if command -v node &> /dev/null && command -v npm &> /dev/null; then
        NODE_VERSION=$(node --version)
        NPM_VERSION=$(npm --version)
        echo -e "${GREEN}✓ Node.js version: ${NODE_VERSION}${NC}"
        echo -e "${GREEN}✓ npm version: ${NPM_VERSION}${NC}"
    else
        echo -e "${RED}✗ Node.js is not installed!${NC}"
        echo -e "${RED}Please install Node.js from: https://nodejs.org/${NC}"
        exit 1
    fi
fi

# Create Resource Group if it doesn't exist
echo ""
echo -e "${YELLOW}Checking resource group...${NC}"
if az group exists --name "$RESOURCE_GROUP_NAME" | grep -q "true"; then
    echo -e "${GREEN}✓ Resource group '$RESOURCE_GROUP_NAME' already exists${NC}"
else
    echo -e "${YELLOW}Creating resource group '$RESOURCE_GROUP_NAME' in '$LOCATION'...${NC}"
    az group create --name "$RESOURCE_GROUP_NAME" --location "$LOCATION" --output none
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Resource group created successfully${NC}"
    else
        echo -e "${RED}✗ Failed to create resource group${NC}"
        exit 1
    fi
fi

# Deploy Bicep template
echo ""
echo -e "${YELLOW}Deploying Azure infrastructure...${NC}"
DEPLOYMENT_NAME="deployment-$(date +%Y%m%d-%H%M%S)"

az deployment group create \
    --name "$DEPLOYMENT_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --template-file "infrastructure/main.bicep" \
    --parameters "infrastructure/parameters.json" \
    --output none

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Infrastructure deployed successfully${NC}"
else
    echo -e "${RED}✗ Infrastructure deployment failed${NC}"
    exit 1
fi

# Get deployment outputs
echo ""
echo -e "${YELLOW}Retrieving deployment information...${NC}"
HOSTNAME=$(az deployment group show \
    --name "$DEPLOYMENT_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --query "properties.outputs.staticWebAppDefaultHostname.value" \
    --output tsv)

DEPLOYMENT_TOKEN=$(az deployment group show \
    --name "$DEPLOYMENT_NAME" \
    --resource-group "$RESOURCE_GROUP_NAME" \
    --query "properties.outputs.staticWebAppDeploymentToken.value" \
    --output tsv)

echo -e "${GREEN}✓ Static Web App URL: https://${HOSTNAME}${NC}"

# Build the application
if [ "$SKIP_BUILD" = false ]; then
    echo ""
    echo -e "${YELLOW}Building application...${NC}"

    # Install dependencies
    echo -e "${YELLOW}Installing dependencies...${NC}"
    npm install --silent

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Dependencies installed${NC}"
    else
        echo -e "${RED}✗ Failed to install dependencies${NC}"
        exit 1
    fi

    # Build the app
    echo -e "${YELLOW}Building React application...${NC}"
    npm run build

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Build completed successfully${NC}"
    else
        echo -e "${RED}✗ Build failed${NC}"
        exit 1
    fi
fi

# Deploy to Static Web App
echo ""
echo -e "${YELLOW}Deploying application to Azure Static Web Apps...${NC}"

npx @azure/static-web-apps-cli deploy ./dist \
    --deployment-token "$DEPLOYMENT_TOKEN" \
    --env production

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${CYAN}==================================================${NC}"
    echo -e "${GREEN}✓ Deployment completed successfully!${NC}"
    echo -e "${CYAN}==================================================${NC}"
    echo ""
    echo -e "${YELLOW}Your application is available at:${NC}"
    echo -e "${CYAN}  https://${HOSTNAME}${NC}"
    echo ""
    echo -e "${GRAY}Resource Group: ${RESOURCE_GROUP_NAME}${NC}"
    echo -e "${GRAY}Location: ${LOCATION}${NC}"
    echo ""
else
    echo -e "${RED}✗ Deployment failed${NC}"
    exit 1
fi
