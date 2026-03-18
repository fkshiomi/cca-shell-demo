# MEPS Content Creation

Content Creation workspace — standalone SPA and Module Federation remote plugin.

## Setup

```bash
cd src/spa/meps-content-creation
npm install
```

### Google OIDC

Add to your Google Cloud Console OAuth client:
- Authorized JavaScript origins: `http://localhost:3001`
- Authorized redirect URIs: `http://localhost:3001/callback`

### Run standalone

```bash
npm start
```

Opens at `http://localhost:3001` with its own Google OIDC login and top bar.

### Run as Module Federation remote

Start this app on port 3001. The shell (port 3000) can load it via:
- `remoteEntry.js` at `http://localhost:3001/remoteEntry.js`
- Exposed modules: `./PluginApp`, `./manifest`
