import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import pluginRegistry from "../data/pluginRegistry";
import { loadRemoteModule } from "../plugins/remoteLoader";

const PluginViewport: React.FC = () => {
  const { pluginId } = useParams<{ pluginId: string }>();
  const auth = useAuth();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [PluginComponent, setPluginComponent] = useState<React.FC<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const entry = pluginRegistry.find((p) => p.id === pluginId);
    if (!entry) {
      setError(`Plugin "${pluginId}" not found in registry`);
      return;
    }

    loadRemoteModule(entry.scope, entry.url, "./PluginApp")
      .then((mod) => {
        setPluginComponent(() => mod.default || mod);
      })
      .catch((err) => {
        console.error("Failed to load plugin:", err);
        setError(`Failed to load plugin "${pluginId}"`);
      });
  }, [pluginId]);

  if (error) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    );
  }

  if (!PluginComponent) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Loading plugin...</p>
      </div>
    );
  }

  const shellContext = {
    auth: {
      user: {
        name: auth.user?.profile?.name || "User",
        roles: [] as string[],
      },
      token: auth.user?.access_token || "",
    },
    eventBus: {
      emit: (event: string, payload: unknown) => console.log("[shell eventBus]", event, payload),
      on: (_event: string, _handler: (payload: unknown) => void) => {},
      off: (_event: string, _handler: (payload: unknown) => void) => {},
    },
  };

  return (
    <div className="flex-1 flex flex-col">
      <PluginComponent shellContext={shellContext} />
    </div>
  );
};

export default PluginViewport;
