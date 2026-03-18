import React from "react";
import { useNavigate } from "react-router-dom";
import { usePluginManifests } from "../plugins/usePluginManifests";

const WorkspacesSection: React.FC = () => {
  const { plugins, loading } = usePluginManifests();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="mb-6">
        <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">Workspaces</h2>
        <p className="text-white/50 text-sm">Loading workspaces...</p>
      </div>
    );
  }

  if (plugins.length === 0) return null;

  return (
    <div className="mb-6">
      <h2 className="text-white text-sm font-semibold mb-4 tracking-wide">Workspaces</h2>
      <div className="flex gap-4 flex-wrap">
        {plugins.map((p) => (
          <button
            key={p.manifest.id}
            onClick={() => navigate(`/plugin/${p.manifest.id}`)}
            className="flex flex-col items-center justify-center bg-white/20 hover:bg-white/30 
                       rounded-lg w-28 h-24 transition-colors cursor-pointer border border-white/30"
          >
            <span className="text-2xl mb-2">{p.manifest.icon}</span>
            <span className="text-white text-xs text-center font-medium whitespace-pre-line leading-tight">
              {p.manifest.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkspacesSection;
