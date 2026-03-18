import React from "react";
import { useAuth } from "react-oidc-context";
import WorkspacesSection from "./WorkspacesSection";
import EditorsSection from "./EditorsSection";

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

const HomePage: React.FC = () => {
  const auth = useAuth();
  const firstName = auth.user?.profile?.given_name || auth.user?.profile?.name || "User";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Blue hero section with greeting + workspaces */}
      <div className="bg-meps-blue px-8 pt-8 pb-10">
        <p className="text-white text-center text-lg mb-8">
          {getGreeting()}, <span className="italic font-medium">{firstName}</span>
        </p>
        <div className="max-w-4xl mx-auto">
          <WorkspacesSection />
        </div>
      </div>

      {/* Editors section on gray background */}
      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <EditorsSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
