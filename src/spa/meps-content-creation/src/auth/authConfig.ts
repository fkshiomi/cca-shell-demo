import { WebStorageStateStore } from "oidc-client-ts";

/**
 * Google OIDC configuration — same credentials as the shell.
 *
 * IMPORTANT: Add http://localhost:3001 to Authorized JavaScript origins
 * and http://localhost:3001/callback to Authorized redirect URIs
 * in Google Cloud Console.
 *
 * NOTE: client_secret in frontend code is acceptable for POC only.
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
