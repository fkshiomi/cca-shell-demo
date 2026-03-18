import React from "react";
import { useAuth } from "react-oidc-context";

const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">Authentication error: {auth.error.message}</p>
          <button onClick={() => auth.signinRedirect()} className="px-6 py-2 bg-meps-blue text-white rounded">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-meps-blue mb-2">MEPS</h1>
          <p className="text-gray-500 mb-6">Content Creation — Sign in to continue</p>
          <button onClick={() => auth.signinRedirect()} className="px-8 py-3 bg-meps-blue text-white rounded-lg hover:bg-meps-blue-dark transition-colors text-lg">
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
