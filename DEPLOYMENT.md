# 🚀 Production Deployment Guide for FinTrack

## ⚠️ Common Production Issues & Solutions

### 1. **500 MIDDLEWARE_INVOCATION_FAILED Error**

This error typically occurs when:
- Environment variables are missing in production
- Clerk configuration is incorrect
- Middleware routes are not properly configured

### 2. **Environment Variables Setup**

**Required Variables for Production:**
```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Database
NEXT_PUBLIC_DATABASE_URL=postgresql://xxxxx

# OpenAI (Optional)
NEXT_PUBLIC_OPENAI_API_KEY=sk-proj-xxxxx
```

### 3. **Vercel Deployment Steps**

1. **Connect GitHub Repository**
   - Go to vercel.com
   - Import your GitHub repository
   - Select the correct branch (main)

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables from above
   - Make sure to add them for all environments (Production, Preview, Development)

3. **Deploy Settings**
   - Framework Preset: Next.js
   - Root Directory: `./` (or leave empty)
   - Build Command: `npm run build`
   - Output Directory: `.next`

### 4. **Clerk Production Setup**

1. **Update Clerk Dashboard**
   - Go to clerk.com dashboard
   - Add your production domain to allowed origins
   - Update redirect URLs to match your production domain

2. **Production Domain Configuration**
   ```bash
   # Update these URLs in Clerk dashboard:
   Authorized redirect URLs: https://your-domain.vercel.app/dashboard
   Sign-in URL: https://your-domain.vercel.app/sign-in
   Sign-up URL: https://your-domain.vercel.app/sign-up
   ```

### 5. **Database Configuration**

Ensure your Neon database:
- Allows connections from Vercel
- Has the correct connection string
- SSL is properly configured

### 6. **Testing Production Deployment**

After deployment, test these endpoints:
- `/api/test` - Should show configuration status
- `/` - Home page should load
- `/sign-in` - Should redirect to Clerk sign-in
- `/dashboard` - Should require authentication

### 7. **Debugging Production Issues**

1. **Check Vercel Function Logs**
   - Go to Vercel dashboard → Functions tab
   - Check for error logs and stack traces

2. **Test API Endpoint**
   - Visit: `https://your-domain.vercel.app/api/test`
   - This will show environment variable status

3. **Check Build Logs**
   - Look for any build-time errors
   - Ensure all dependencies are properly installed

### 8. **Common Fixes**

**If still getting 500 errors:**

1. **Redeploy with clean cache**
   ```bash
   git commit -m "Force redeploy"
   git push origin main
   ```

2. **Check environment variables are exactly as in .env.local**

3. **Verify Clerk keys match your dashboard**

4. **Ensure domain is added to Clerk allowed origins**

### 9. **Emergency Rollback**

If production is broken:
1. Go to Vercel dashboard
2. Go to Deployments tab
3. Find last working deployment
4. Click "Promote to Production"

---

## 🔧 Quick Fix Commands

**Redeploy with fixes:**
```bash
git add .
git commit -m "🔧 Fix production deployment issues"
git push origin main
```

**Check deployment status:**
- Visit: `https://your-domain.vercel.app/api/test`
- Should return configuration status

---

## 📞 Need Help?

If you're still experiencing issues:
1. Check Vercel function logs
2. Verify all environment variables
3. Ensure Clerk production settings match your domain
4. Test the `/api/test` endpoint for diagnostics
