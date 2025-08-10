# Azure Static Web Apps Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- Azure account (free tier available)
- GitHub repository for your Haydenworx project
- Azure CLI installed (optional, but recommended)
dfdfdffdfdhftrgfdfdfdfdfdfdseeeee
### 2. Azure Portal Setup

1. **Create Azure Static Web App:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Click "Create a resource" → "Static Web App"
   - Fill in the details:
     - **Resource Group**: Create new `rg-haydenworx-prod`
     - **Name**: `haydenworx-construction`
     - **Plan type**: Free (perfect for small business)
     - **Region**: East US 2 (or closest to your location)

2. **GitHub Integration:**
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: Your Haydenworx repository
   - **Branch**: main
   - **Build Presets**: Custom
   - **App location**: `/`
   - **API location**: `api`
   - **Output location**: `client/dist`

3. **Deploy:**
   - Click "Review + create" then "Create"
   - Azure will automatically create a GitHub Action workflow
   - Your site will be deployed in 2-3 minutes

### 3. Custom Domain Setup (Optional)

1. **Purchase Domain** (if you don't have one):
   - Recommended: `haydenworx.com` or `haydenworxconstruction.com`

2. **Configure DNS:**
   - Add CNAME record: `www` → `your-app-name.azurestaticapps.net`
   - Add custom domain in Azure Portal → Static Web Apps → Custom domains

3. **SSL Certificate:**
   - Automatically provided by Azure (free)

### 4. Environment Variables

Add these secrets in your GitHub repository settings:

```
AZURE_STATIC_WEB_APPS_API_TOKEN=<from Azure Portal>
```

### 5. API Configuration

The Azure Functions API is configured for:
- **Contact form submissions** at `/api/contact`
- **CORS enabled** for your domain
- **Automatic scaling** based on traffic
- **Built-in monitoring** with Application Insights

## 📊 Cost Breakdown

**Free Tier Includes:**
- 100 GB bandwidth per month
- 0.5 GB storage
- Custom domains and SSL
- GitHub integration
- Global CDN

**Estimated Monthly Cost:**
- **Static Web App**: $0 (free tier)
- **Azure Functions**: $0 (1M executions free)
- **Total**: $0/month for typical small business traffic

## 🔧 Advanced Features Available

### Authentication (Future Enhancement)
```json
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        "registration": {
          "openIdIssuer": "https://login.microsoftonline.com/your-tenant-id/v2.0",
          "clientIdSettingName": "AZURE_CLIENT_ID",
          "clientSecretSettingName": "AZURE_CLIENT_SECRET"
        }
      }
    }
  }
}
```

### Database Integration (Cosmos DB)
```javascript
// Upgrade contact function to use Cosmos DB
const { CosmosClient } = require("@azure/cosmos");

const cosmosClient = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY
});
```

### Email Notifications (SendGrid)
```javascript
// Add to contact function
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@haydenworx.com',
  from: 'noreply@haydenworx.com',
  subject: 'New Construction Inquiry',
  text: `New inquiry from ${name}: ${message}`
};

await sgMail.send(msg);
```

## 🚦 Deployment Status

✅ **Static Web App Configuration**: Ready  
✅ **Azure Functions API**: Ready  
✅ **GitHub Actions Workflow**: Ready  
✅ **CORS Configuration**: Ready  
⚠️ **Custom Domain**: Manual setup required  
⚠️ **Email Notifications**: Requires SendGrid key  

## 🆘 Troubleshooting

**Common Issues:**

1. **Build Fails**: Check Node.js version in engines field
2. **API Not Working**: Verify CORS settings in staticwebapp.config.json
3. **404 Errors**: Check navigationFallback configuration

**Support Resources:**
- [Azure Static Web Apps Documentation](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## 🎯 Next Steps

1. Push code to GitHub (triggers automatic deployment)
2. Verify deployment at `https://your-app-name.azurestaticapps.net`
3. Configure custom domain (optional)
4. Set up email notifications with SendGrid
5. Add Cosmos DB for persistent data storage

Your Haydenworx construction consulting website will have enterprise-grade hosting with automatic scaling, global CDN, and 99.95% uptime SLA!
