@description('Name of the Static Web App')
param staticWebAppName string = 'ai-service-hub-presentation'

@description('Location for all resources')
param location string = resourceGroup().location

@description('SKU for Static Web App')
@allowed([
  'Free'
  'Standard'
])
param sku string = 'Free'

@description('Tags for all resources')
param tags object = {
  Environment: 'Production'
  Project: 'AI-Service-Hub-Presentation'
  ManagedBy: 'Bicep'
}

resource staticWebApp 'Microsoft.Web/staticSites@2023-01-01' = {
  name: staticWebAppName
  location: location
  tags: tags
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    // For manual deployment, we don't need repositoryUrl
    buildProperties: {
      appLocation: '/'
      apiLocation: ''
      outputLocation: 'dist'
    }
  }
}

@description('The default hostname of the static web app')
output staticWebAppDefaultHostname string = staticWebApp.properties.defaultHostname

@description('The deployment token for the static web app')
#disable-next-line outputs-should-not-contain-secrets
output staticWebAppDeploymentToken string = staticWebApp.listSecrets().properties.apiKey

@description('The resource ID of the static web app')
output staticWebAppId string = staticWebApp.id
