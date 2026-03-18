import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig } from "./auth/authConfig";
import AuthGuard from "./auth/AuthGuard";
import ShellApp from "./shell/ShellApp";
import "./styles.css";

const onSigninCallback = () => {
  // Remove OIDC query params from URL after login
  window.history.replaceState({}, document.title, window.location.pathname);
};

const App: React.FC = () => (
  <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
    <AuthGuard>
      <ShellApp />
    </AuthGuard>
  </AuthProvider>
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
