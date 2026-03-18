import React from "react";
import { useAuth } from "react-oidc-context";

const ContentArea: React.FC = () => {
  const auth = useAuth();
  const name = auth.user?.profile?.given_name || auth.user?.profile?.name || "User";

  return (
    <div className="flex-1 flex items-center justify-center bg-white border border-dashed border-gray-300 m-4 rounded-lg">
      <div className="text-center text-gray-400">
        <p className="text-lg mb-2">Welcome, {name}</p>
        <p className="text-sm">Select a menu item to get started</p>
      </div>
    </div>
  );
};

export default ContentArea;
