/**
 * Plugin registry — maps plugin IDs to their Module Federation remote URLs.
 * In production, this could come from an API or config service.
 */

export interface PluginEntry {
  id: string;
  scope: string; // Module Federation scope name
  url: string; // URL to remoteEntry.js
}

const pluginRegistry: PluginEntry[] = [
  {
    id: "content-creation",
    scope: "contentCreationPlugin",
    url: "http://localhost:3001/remoteEntry.js",
  },
  // Add more plugins here as they are created:
  // { id: "translation", scope: "translationPlugin", url: "http://localhost:3002/remoteEntry.js" },
];

export default pluginRegistry;
