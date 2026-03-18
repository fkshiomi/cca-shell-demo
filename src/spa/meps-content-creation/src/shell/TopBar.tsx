import React from "react";
import { useAuth } from "react-oidc-context";
import {
  Home,
  ChevronDown,
  Search,
  Bell,
  HelpCircle,
  User,
  LayoutGrid,
  LogOut,
  Check,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { workspaceLinks, navItems } from "../data/workspaces";

const SHELL_HOME_URL = "http://localhost:3000";

const TopBar: React.FC = () => {
  const auth = useAuth();

  return (
    <header className="bg-white border-b border-gray-300 flex items-center h-11">
      {/* Left section: MEPS logo + workspace dropdown + nav items */}
      <div className="flex items-center h-full">
        {/* MEPS Logo */}
        <a
          href={SHELL_HOME_URL}
          className="flex items-center gap-1 px-3 text-gray-700 font-bold text-sm border-r border-gray-300 h-full hover:bg-gray-50"
        >
          MEPS
        </a>

        {/* Workspace icon + dropdown */}
        <WorkspaceDropdown />

        {/* Nav items: Publications, Workflow */}
        {navItems.map((item) => (
          <DropdownMenu.Root key={item.id}>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center gap-1 px-3 h-full text-sm text-gray-700 hover:bg-gray-100 transition-colors border-r border-gray-200">
                {item.label}
                <ChevronDown size={12} className="text-gray-400" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white rounded-md shadow-lg border border-gray-200 p-2 min-w-[160px] z-50"
                sideOffset={2}
              >
                <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-500 outline-none">
                  {item.label} menu — coming soon
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ))}
      </div>

      {/* Right section: icons */}
      <div className="flex items-center gap-1 ml-auto pr-3">
        <button className="p-2 text-gray-500 hover:text-meps-blue" aria-label="Search">
          <Search size={18} />
        </button>
        <button className="p-2 text-gray-500 hover:text-meps-blue relative" aria-label="Notifications">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <button className="p-2 text-gray-500 hover:text-meps-blue" aria-label="Help">
          <HelpCircle size={18} />
        </button>

        {/* User menu */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="p-2 text-gray-500 hover:text-meps-blue" aria-label="User menu">
              <User size={18} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="bg-white rounded-md shadow-lg border border-gray-200 p-2 min-w-[180px] z-50"
              sideOffset={5}
              align="end"
            >
              <DropdownMenu.Label className="px-2 py-1 text-sm text-gray-500">
                {auth.user?.profile?.email}
              </DropdownMenu.Label>
              <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
              <DropdownMenu.Item
                className="flex items-center gap-2 px-2 py-2 text-sm text-gray-700 rounded cursor-pointer hover:bg-gray-100 outline-none"
                onSelect={() => auth.signoutRedirect()}
              >
                <LogOut size={14} />
                Sign out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>

        <button className="p-2 text-gray-500 hover:text-meps-blue" aria-label="Grid view">
          <LayoutGrid size={18} />
        </button>
      </div>
    </header>
  );
};

/** Workspace icon button with dropdown showing workspace list */
const WorkspaceDropdown: React.FC = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-1 px-3 h-11 text-gray-600 hover:bg-gray-100 transition-colors border-r border-gray-200">
          <span className="text-lg">✏️</span>
          <ChevronDown size={12} className="text-gray-400" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-lg border border-gray-200 py-2 min-w-[220px] z-50"
          sideOffset={2}
          align="start"
        >
          {/* MEPS Home link */}
          <DropdownMenu.Item
            className="flex items-center gap-3 px-4 py-2 text-sm text-meps-blue cursor-pointer hover:bg-gray-50 outline-none"
            onSelect={() => { window.location.href = "http://localhost:3000"; }}
          >
            <Home size={16} />
            MEPS Home
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />

          {/* Workspaces label */}
          <DropdownMenu.Label className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Workspaces
          </DropdownMenu.Label>

          {/* Workspace items */}
          {workspaceLinks.map((ws) => (
            <DropdownMenu.Item
              key={ws.id}
              className={`flex items-center gap-3 px-4 py-2 text-sm cursor-pointer outline-none ${
                ws.active
                  ? "text-gray-800 font-medium"
                  : "text-gray-600 hover:bg-meps-blue hover:text-white"
              }`}
              onSelect={() => {
                if (!ws.active) window.location.href = ws.href;
              }}
            >
              <span className="text-base">{ws.icon}</span>
              <span className="flex-1">{ws.label}</span>
              {ws.active && <Check size={14} className="text-gray-500" />}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default TopBar;
