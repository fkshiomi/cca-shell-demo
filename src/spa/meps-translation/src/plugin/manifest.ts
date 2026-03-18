/**
 * Plugin manifest — exposed via Module Federation for the shell to consume.
 */

interface AuthContext {
  user: { id: string; email: string; name: string; roles: string[] };
  token: string;
}

interface PluginMenuItem {
  pluginId: string;
  id: string;
  label: string;
  path: string;
  category?: string;
  icon?: string;
  order?: number;
}

const manifest = {
  id: "translation",
  name: "Translation",
  version: "1.0.0",
  framework: "vue" as const,
  type: "workspace" as const,
  icon: "🔤",
  description: "Translation management workspace",
  requiredRoles: ["admin", "translator"],

  getMenuItems(auth: AuthContext): PluginMenuItem[] {
    return [
      { pluginId: "translation", id: "tr-dashboard", label: "Dashboard", path: "/translation/dashboard", category: "Translation", order: 1 },
      { pluginId: "translation", id: "tr-personnel", label: "Personnel", path: "/translation/personnel", category: "Translation", order: 2 },
      { pluginId: "translation", id: "tr-media", label: "Media", path: "/translation/media", category: "Translation", order: 3 },
      { pluginId: "translation", id: "tr-projects", label: "Projects", path: "/translation/projects", category: "Translation", order: 4 },
      { pluginId: "translation", id: "tr-library", label: "Library", path: "/translation/library", category: "Translation", order: 5 },
      { pluginId: "translation", id: "tr-publish", label: "Publish", path: "/translation/publish", category: "Translation", order: 6 },
    ];
  },
};

export default manifest;
