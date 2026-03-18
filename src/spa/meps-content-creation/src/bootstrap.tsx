import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "./auth/authConfig";
import AuthGuard from "./auth/AuthGuard";
import App from "./shell/App";
import "./styles.css";

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const Root: React.FC = () => (
  <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
    <AuthGuard>
      <App />
    </AuthGuard>
  </AuthProvider>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<Root />);
}
