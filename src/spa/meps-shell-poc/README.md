# MepsShellPoc

MEPS microfrontend shell POC — React 18 + Radix UI + Tailwind + Webpack 5 with Google OIDC authentication.

## Setup

### 1. Install dependencies

```bash
cd src/spa/meps-shell-poc
npm install
```

### 2. Configure Google OIDC

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials
2. Create an OAuth 2.0 Client ID (type: Web application)
3. Add `http://localhost:3000` to **Authorized JavaScript origins**
4. Add `http://localhost:3000/callback` to **Authorized redirect URIs**
5. Copy the Client ID and paste it in `src/auth/authConfig.ts` replacing `YOUR_GOOGLE_CLIENT_ID`

### 3. Run locally

```bash
npm start
```

Opens at `http://localhost:3000`. You'll see a sign-in screen, then after Google auth the MEPS home page with Workspaces and Editors.

### 4. Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy to S3 + CloudFront.
