#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Deployment script for AI Service Hub Presentation to Azure Static Web Apps

.DESCRIPTION
    This script deploys the presentation application to Azure using Bicep.
    It creates the infrastructure and deploys the built application.

.PARAMETER ResourceGroupName
    Name of the Azure Resource Group (will be created if it doesn't exist)

.PARAMETER Location
    Azure region for deployment (default: westeurope)

.PARAMETER SkipBuild
    Skip the npm build step (useful if you've already built the app)

.EXAMPLE
    ./deploy.ps1 -ResourceGroupName "rg-ai-service-hub" -Location "westeurope"
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $false)]
    [string]$ResourceGroupName = "rg-ai-service-hub-presentation",

    [Parameter(Mandatory = $false)]
    [string]$Location = "westeurope",

    [Parameter(Mandatory = $false)]
    [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "AI Service Hub Presentation - Azure Deployment" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if Azure CLI is installed
Write-Host "Checking Azure CLI installation..." -ForegroundColor Yellow
try {
    $azVersion = az version --output json | ConvertFrom-Json
    Write-Host "✓ Azure CLI version: $($azVersion.'azure-cli')" -ForegroundColor Green
} catch {
    Write-Host "✗ Azure CLI is not installed!" -ForegroundColor Red
    Write-Host "Please install Azure CLI from: https://docs.microsoft.com/cli/azure/install-azure-cli" -ForegroundColor Red
    exit 1
}

# Check if logged in to Azure
Write-Host "Checking Azure login status..." -ForegroundColor Yellow
try {
    $account = az account show --output json 2>$null | ConvertFrom-Json
    if ($account) {
        Write-Host "✓ Logged in as: $($account.user.name)" -ForegroundColor Green
        Write-Host "  Subscription: $($account.name) ($($account.id))" -ForegroundColor Gray
    }
} catch {
    Write-Host "✗ Not logged in to Azure!" -ForegroundColor Red
    Write-Host "Initiating Azure login..." -ForegroundColor Yellow
    az login
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Azure login failed!" -ForegroundColor Red
        exit 1
    }
}

# Check if Node.js and npm are installed
if (-not $SkipBuild) {
    Write-Host ""
    Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
    try {
        $nodeVersion = node --version
        $npmVersion = npm --version
        Write-Host "✓ Node.js version: $nodeVersion" -ForegroundColor Green
        Write-Host "✓ npm version: $npmVersion" -ForegroundColor Green
    } catch {
        Write-Host "✗ Node.js is not installed!" -ForegroundColor Red
        Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Red
        exit 1
    }
}

# Create Resource Group if it doesn't exist
Write-Host ""
Write-Host "Checking resource group..." -ForegroundColor Yellow
$rgExists = az group exists --name $ResourceGroupName
if ($rgExists -eq "false") {
    Write-Host "Creating resource group '$ResourceGroupName' in '$Location'..." -ForegroundColor Yellow
    az group create --name $ResourceGroupName --location $Location --output none
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Resource group created successfully" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to create resource group" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✓ Resource group '$ResourceGroupName' already exists" -ForegroundColor Green
}

# Deploy Bicep template
Write-Host ""
Write-Host "Deploying Azure infrastructure..." -ForegroundColor Yellow
$deploymentName = "deployment-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

az deployment group create `
    --name $deploymentName `
    --resource-group $ResourceGroupName `
    --template-file "infrastructure/main.bicep" `
    --parameters "infrastructure/parameters.json" `
    --output none

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Infrastructure deployed successfully" -ForegroundColor Green
} else {
    Write-Host "✗ Infrastructure deployment failed" -ForegroundColor Red
    exit 1
}

# Get deployment outputs
Write-Host ""
Write-Host "Retrieving deployment information..." -ForegroundColor Yellow
$outputs = az deployment group show `
    --name $deploymentName `
    --resource-group $ResourceGroupName `
    --query "properties.outputs" `
    --output json | ConvertFrom-Json

$hostname = $outputs.staticWebAppDefaultHostname.value
$deploymentToken = $outputs.staticWebAppDeploymentToken.value

Write-Host "✓ Static Web App URL: https://$hostname" -ForegroundColor Green

# Build the application
if (-not $SkipBuild) {
    Write-Host ""
    Write-Host "Building application..." -ForegroundColor Yellow

    # Install dependencies
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install --silent

    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Dependencies installed" -ForegroundColor Green
    } else {
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }

    # Build the app
    Write-Host "Building React application..." -ForegroundColor Yellow
    npm run build

    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Build completed successfully" -ForegroundColor Green
    } else {
        Write-Host "✗ Build failed" -ForegroundColor Red
        exit 1
    }
}

# Install Azure Static Web Apps CLI if not present
Write-Host ""
Write-Host "Checking for Azure Static Web Apps CLI..." -ForegroundColor Yellow
$swaCliInstalled = Get-Command "swa" -ErrorAction SilentlyContinue
if (-not $swaCliInstalled) {
    Write-Host "Installing Azure Static Web Apps CLI..." -ForegroundColor Yellow
    npm install -g @azure/static-web-apps-cli
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Failed to install SWA CLI" -ForegroundColor Red
        exit 1
    }
}

# Deploy to Static Web App
Write-Host ""
Write-Host "Deploying application to Azure Static Web Apps..." -ForegroundColor Yellow

npx @azure/static-web-apps-cli deploy ./dist `
    --deployment-token $deploymentToken `
    --env production

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host "✓ Deployment completed successfully!" -ForegroundColor Green
    Write-Host "==================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Your application is available at:" -ForegroundColor Yellow
    Write-Host "  https://$hostname" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Resource Group: $ResourceGroupName" -ForegroundColor Gray
    Write-Host "Location: $Location" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "✗ Deployment failed" -ForegroundColor Red
    exit 1
}
