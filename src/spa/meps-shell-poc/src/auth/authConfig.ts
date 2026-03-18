import { WebStorageStateStore } from "oidc-client-ts";

/**
 * Google OIDC configuration.
 *
 * To set up:
 * 1. Go to https://console.cloud.google.com/ → APIs & Services → Credentials
 * 2. Create an OAuth 2.0 Client ID (Web application)
 * 3. Add http://localhost:3000 to Authorized JavaScript origins
 * 4. Add http://localhost:3000/callback to Authorized redirect URIs
 * 5. Replace the values below with your Client ID and Client Secret
 *
 * NOTE: client_secret in frontend code is acceptable for POC only.
 * For production, use a Backend-for-Frontend (BFF) pattern to keep the secret server-side.
 */

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "YOUR_GOOGLE_CLIENT_SECRET";

export const oidcConfig = {
  authority: "https://accounts.google.com",
  client_id: GOOGLE_CLIENT_ID,
  client_secret: GOOGLE_CLIENT_SECRET,
  redirect_uri: `${window.location.origin}/callback`,
  post_logout_redirect_uri: window.location.origin,
  response_type: "code",
  scope: "openid profile email",
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  automaticSilentRenew: false,
};
