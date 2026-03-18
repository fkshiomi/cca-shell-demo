/**
 * Plugin manifest — exposed via Module Federation for the shell to consume.
 * The shell loads this to get workspace metadata and dynamic menu items.
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
  id: "content-creation",
  name: "Content Creation",
  version: "1.0.0",
  framework: "react" as const,
  type: "workspace" as const,
  icon: "✏️",
  description: "Create and manage content",
  requiredRoles: ["admin", "content-creator"],

  getMenuItems(auth: AuthContext): PluginMenuItem[] {
    const items: PluginMenuItem[] = [
      { pluginId: "content-creation", id: "cc-publications", label: "Publications", path: "/content-creation/publications", category: "Content Creation", order: 1 },
      { pluginId: "content-creation", id: "cc-workflow", label: "Workflow", path: "/content-creation/workflow", category: "Content Creation", order: 2 },
    ];
    return items;
  },
};

export default manifest;
