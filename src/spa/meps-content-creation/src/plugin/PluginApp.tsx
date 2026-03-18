import React from "react";
import { AuthProvider, useAuth } from "react-oidc-context";
import { oidcConfig } from "../auth/authConfig";
import App from "../shell/App";
// Styles must be imported here because bootstrap.tsx (which normally imports them)
// does not execute when the plugin is loaded via Module Federation.
import "../styles.css";

/**
 * Plugin root component — exposed via Module Federation.
 *
 * Wraps App in an AuthProvider so useAuth() works regardless of whether
 * the shell's AuthProvider context is reachable (depends on singleton sharing).
 */
const PluginAppInner: React.FC = () => {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div className="flex items-center justify-center h-screen text-gray-500">Loading auth...</div>;
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <button
          onClick={() => auth.signinRedirect()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Sign in
        </button>
      </div>
    );
  }

  return <App />;
};

const onSigninCallback = () => {
  window.history.replaceState({}, document.title, window.location.pathname);
};

const PluginApp: React.FC = () => {
  return (
    <AuthProvider {...oidcConfig} onSigninCallback={onSigninCallback}>
      <PluginAppInner />
    </AuthProvider>
  );
};

export default PluginApp;
