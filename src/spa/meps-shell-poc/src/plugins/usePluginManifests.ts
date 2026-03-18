import { useEffect, useState } from "react";
import pluginRegistry, { PluginEntry } from "../data/pluginRegistry";
import { loadRemoteModule } from "./remoteLoader";

export interface PluginManifest {
  id: string;
  name: string;
  version: string;
  framework: "react" | "vue";
  type: "workspace" | "editor" | "utility";
  icon: string;
  description: string;
  requiredRoles: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getMenuItems: (auth: any) => any[];
}

export interface LoadedPlugin {
  entry: PluginEntry;
  manifest: PluginManifest;
}

export function usePluginManifests() {
  const [plugins, setPlugins] = useState<LoadedPlugin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadAll() {
      const results: LoadedPlugin[] = [];

      const settled = await Promise.allSettled(
        pluginRegistry.map(async (entry) => {
          const mod = await loadRemoteModule(entry.scope, entry.url, "./manifest");
          const manifest: PluginManifest = mod.default || mod;
          return { entry, manifest };
        })
      );

      for (const result of settled) {
        if (result.status === "fulfilled") {
          results.push(result.value);
        } else {
          console.warn("Failed to load plugin manifest:", result.reason);
        }
      }

      if (!cancelled) {
        setPlugins(results);
        setLoading(false);
      }
    }

    loadAll();
    return () => { cancelled = true; };
  }, []);

  return { plugins, loading };
}
