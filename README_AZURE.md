# 🏗️ Haydenworx Azure Static Web Apps Deployment

Your Haydenworx construction consulting website is now **Azure-ready** for enterprise hosting!

## ✅ What's Been Created

### 1. **GitHub Actions Workflow** (`.github/workflows/azure-static-web-apps.yml`)
- Automatic deployment on every push to main branch
- Pull request previews for testing changes
- Node.js 20 for optimal performance
- Production builds with optimizations

### 2. **Azure Functions API** (`api/` folder)
- Serverless contact form handler at `/api/contact`
- CORS enabled for cross-origin requests
- Input validation with Zod
- Automatic scaling based on traffic
- 1 million free executions per month

### 3. **Static Web App Configuration** (`staticwebapp.config.json`)
- Single Page Application routing
- Security headers (XSS protection, content security policy)
- 404 fallback to homepage
- MIME type definitions

## 🚀 Deployment Steps

### Option A: Quick Deploy (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add Azure Static Web Apps deployment"
   git push origin main
   ```

2. **Create Azure Static Web App:**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create → Static Web App
   - Connect to your GitHub repository
   - The workflow will automatically deploy your site

### Option B: Azure CLI Deploy

```bash
# Install Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

# Login and create resource group
az login
az group create --name rg-haydenworx --location eastus2

# Create static web app
az staticwebapp create \
  --name haydenworx-construction \
  --resource-group rg-haydenworx \
  --source https://github.com/YOUR_USERNAME/YOUR_REPO \
  --location eastus2 \
  --branch main \
  --app-location "/" \
  --api-location "api" \
  --output-location "client/dist"
```

## 📊 Benefits of Azure Hosting

### **Cost-Effective**
- **Free Tier**: 100GB bandwidth, 0.5GB storage
- **Functions**: 1M executions free monthly
- **SSL**: Free automatic certificates
- **CDN**: Global content delivery included

### **Enterprise Features**
- **99.95% uptime SLA**
- **Automatic scaling** from 0 to millions of users
- **Global edge locations** for fast loading worldwide
- **Built-in security** with Azure security center
- **Application Insights** for monitoring and analytics

### **Developer Experience**
- **Zero configuration** deployment
- **Pull request previews** for testing
- **Custom domains** with automatic SSL
- **Environment variables** for secrets
- **Staging slots** for testing

## 🔧 Next Steps After Deployment

### 1. **Custom Domain Setup**
```bash
# Add custom domain (in Azure Portal)
haydenworx.com → CNAME → your-app.azurestaticapps.net
www.haydenworx.com → CNAME → your-app.azurestaticapps.net
```

### 2. **Email Notifications (SendGrid Integration)**
```bash
# Add to GitHub Secrets
SENDGRID_API_KEY=your_sendgrid_key

# Add to Azure Function
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### 3. **Database Upgrade (Cosmos DB)**
```bash
# Add to GitHub Secrets
COSMOS_ENDPOINT=https://your-cosmos.documents.azure.com:443/
COSMOS_KEY=your_cosmos_key
```

### 4. **Authentication (Azure AD B2B)**
```json
// staticwebapp.config.json auth section
{
  "auth": {
    "identityProviders": {
      "azureActiveDirectory": {
        "registration": {
          "openIdIssuer": "https://login.microsoftonline.com/tenant-id/v2.0"
        }
      }
    }
  }
}
```

## 📈 Monitoring & Analytics

### **Application Insights** (Automatic)
- Real-time performance monitoring
- User behavior analytics
- Error tracking and debugging
- Custom dashboards

### **GitHub Actions** (Deployment Monitoring)
- Build and deployment status
- Performance metrics
- Error notifications

## 🆘 Support & Resources

- **Azure Documentation**: [Static Web Apps Guide](https://docs.microsoft.com/azure/static-web-apps/)
- **Functions Documentation**: [Azure Functions JavaScript](https://docs.microsoft.com/azure/azure-functions/functions-reference-node)
- **Cost Calculator**: [Azure Pricing](https://azure.microsoft.com/pricing/calculator/)

Your construction consulting website now has enterprise-grade hosting that can scale from startup to enterprise with zero infrastructure management! 🎉