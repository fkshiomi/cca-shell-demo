import React from "react";
import { useAuth } from "react-oidc-context";
import {
  HelpCircle,
  User,
  LayoutGrid,
  Home,
  ChevronDown,
  LogOut,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const TopBar: React.FC = () => {
  const auth = useAuth();
  const userName = auth.user?.profile?.given_name || auth.user?.profile?.name || "User";

  return (
    <header className="bg-white border-b border-gray-300 px-4 py-2 flex items-center justify-between">
      {/* Left: Logo + Home */}
      <div className="flex items-center gap-3">
        <span className="font-bold text-sm text-gray-700 border border-gray-300 px-2 py-1 rounded">
          MEPS
        </span>
        <button className="flex items-center gap-1 text-gray-600 hover:text-meps-blue transition-colors">
          <Home size={18} />
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Right: Icons + User */}
      <div className="flex items-center gap-4">
        <button className="text-gray-500 hover:text-meps-blue transition-colors" aria-label="Help">
          <HelpCircle size={20} />
        </button>

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="text-gray-500 hover:text-meps-blue transition-colors" aria-label="User menu">
              <User size={20} />
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

        <button className="text-gray-500 hover:text-meps-blue transition-colors" aria-label="Grid view">
          <LayoutGrid size={20} />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
