export interface WorkspaceLink {
  id: string;
  label: string;
  icon: string;
  href: string;
  active?: boolean;
}

export const workspaceLinks: WorkspaceLink[] = [
  { id: "content-creation", label: "Content Creation", icon: "✏️", href: "/", active: true },
  { id: "translation-production", label: "Translation & Production", icon: "🔤", href: "#" },
  { id: "graphics-print", label: "Graphics & Print", icon: "🖨️", href: "#" },
  { id: "distribution", label: "Distribution", icon: "📦", href: "#" },
];

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { id: "publications", label: "Publications", href: "/publications" },
  { id: "workflow", label: "Workflow", href: "/workflow" },
];
