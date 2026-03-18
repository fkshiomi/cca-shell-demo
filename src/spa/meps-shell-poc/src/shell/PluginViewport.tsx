import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import pluginRegistry from "../data/pluginRegistry";
import { loadRemoteModule } from "../plugins/remoteLoader";

const PluginViewport: React.FC = () => {
  const { pluginId } = useParams<{ pluginId: string }>();
  const [PluginComponent, setPluginComponent] = useState<React.FC | null>(null);
  const [isVue, setIsVue] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const vueContainerRef = useRef<HTMLDivElement>(null);
  const vueUnmountRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const entry = pluginRegistry.find((p) => p.id === pluginId);
    if (!entry) {
      setError(`Plugin "${pluginId}" not found in registry`);
      return;
    }

    // Load manifest first to determine framework
    loadRemoteModule(entry.scope, entry.url, "./manifest")
      .then((manifestMod) => {
        const manifest = manifestMod.default || manifestMod;
        const framework = manifest.framework || "react";

        if (framework === "vue") {
          setIsVue(true);
          return loadRemoteModule(entry.scope, entry.url, "./mount").then((mod) => {
            const { mount } = mod;
            setPluginComponent(() => () => null); // Signal loading done
            setTimeout(() => {
              if (vueContainerRef.current) {
                vueUnmountRef.current = mount(vueContainerRef.current);
              }
            }, 0);
          });
        } else {
          setIsVue(false);
          return loadRemoteModule(entry.scope, entry.url, "./PluginApp").then((mod) => {
            setPluginComponent(() => mod.default || mod);
          });
        }
      })
      .catch((err) => {
        console.error("Failed to load plugin:", err);
        setError(`Failed to load plugin "${pluginId}"`);
      });

    return () => {
      if (vueUnmountRef.current) {
        vueUnmountRef.current();
        vueUnmountRef.current = null;
      }
    };
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

  if (isVue) {
    return <div ref={vueContainerRef} className="flex-1 flex flex-col min-h-screen" />;
  }

  return (
    <div className="flex-1 flex flex-col">
      <PluginComponent />
    </div>
  );
};

export default PluginViewport;
