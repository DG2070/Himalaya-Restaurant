// src/routes/_admin.tsx

import GradientText from "@/components/shared/gradient-text";
import { cn } from "@/lib/utils";
import { useAuth } from "@/provider/use-auth";
import {
  createFileRoute,
  Link,
  Navigate,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import {
  Briefcase,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  FileText,
  HandPlatter,
  Images,
  LayoutDashboard,
  LogOut,
  MessageCircle,
  Newspaper,
  Phone,
  Sticker,
  Users,
  UserSquare,
  Utensils,
} from "lucide-react";
import React from "react";

export const Route = createFileRoute("/_admin")({
  component: RouteComponent,
});

interface NavProps {
  name: string;
  id: string;
  url: string;
  icon: React.ReactNode;
}

const NavLinks: NavProps[] = [
  { id: "1", name: "Dashboard", url: "/", icon: <LayoutDashboard size={20} /> },
  {
    id: "2",
    name: "Food Group",
    url: "/food-group",
    icon: <HandPlatter size={20} />,
  },
  { id: "3", name: "Foods", url: "/foods", icon: <Utensils size={20} /> },
  { id: "4", name: "Gallery", url: "/gallery", icon: <Images size={20} /> },
  {
    id: "5",
    name: "Feedback",
    url: "/feedback",
    icon: <Sticker size={20} />,
  },
  { id: "9", name: "Contact", url: "/contact", icon: <Phone size={20} /> },
];

const NavItems = ({ nav, expanded }: { nav: NavProps; expanded: boolean }) => {
  const { location } = useRouterState();
  const pathname = location.pathname;

  const isRoot = nav.url === "/";
  const isActive = isRoot
    ? pathname === "/" || pathname === "/_admin"
    : pathname.includes(nav.url);

  return (
    <Link
      to={nav.url}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
        "text-primary hover:bg-primary hover:text-white",
        isActive && "bg-primary text-white flex ",
        isActive && !expanded && "items-center justify-center"
      )}
      aria-current={isActive ? "page" : undefined}
    >
      <span>{nav.icon}</span>
      {expanded && <span className="whitespace-nowrap">{nav.name}</span>}
    </Link>
  );
};

function AdminNavbar({
  expanded,
  setExpanded,
  user,
  onLogout,
}: {
  expanded: boolean;
  setExpanded: (v: boolean) => void;
  user: { name?: string; email?: string } | null;
  onLogout: () => void;
}) {
  return (
    <nav className="flex items-center justify-between bg-gray-900 shadow-xl px-4 py-3 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          {expanded ? (
            <ChevronLeft size={22} className="text-primary" />
          ) : (
            <ChevronRight size={22} className="text-primary" />
          )}
        </button>
        <span className="font-semibold text-xl text-primary uppercase tracking-wide">
          Himalaya Resturant Admin
        </span>
      </div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex flex-col items-end">
            <span className="font-medium text-primary text-sm">
              {user.name || "Admin"}
            </span>
            <span className="text-xs text-gray-500">{user.email}</span>
          </div>
        )}
        <button
          className="p-2 rounded hover:bg-red-50 transition text-red-600"
          onClick={onLogout}
          aria-label="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </nav>
  );
}

function RouteComponent() {
  const auth = useAuth();
  // Persist sidebar state in localStorage
  const [expanded, setExpanded] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("adminSidebarExpanded");
      return stored ? JSON.parse(stored) : true; // default: expanded
    }
    return true;
  });

  // Save sidebar state
  React.useEffect(() => {
    localStorage.setItem("adminSidebarExpanded", JSON.stringify(expanded));
  }, [expanded]);

  // Sidebar hover logic (only when not pinned)
  const [hovered, setHovered] = React.useState(false);
  const sidebarExpanded = expanded || hovered;

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    if (auth.logout) auth.logout();
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <div
        className={cn(
          "bg-gray-800 p-4 hidden md:flex flex-col gap-8 border-r border-gray-100 shadow-[4px_0_10px_-3px_rgba(0,0,0,0.1)] transition-all duration-300 z-20",
          sidebarExpanded ? "w-56" : "w-16"
        )}
        onMouseEnter={() => !expanded && setHovered(true)}
        onMouseLeave={() => !expanded && setHovered(false)}
        style={{ minWidth: sidebarExpanded ? "14rem" : "4rem" }}
      >
        <div className="flex justify-center items-center transition-all duration-300">
          {sidebarExpanded ? (
            <div className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 gap-2 transition-transform duration-300 group-hover:scale-105">
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <img
                    src={"/logo.png"}
                    alt="Himalayan Restaurant Logo"
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, 48px"
                  />
                </div>
              </div>
              <GradientText
                text="Himalayan Restaurant"
                className="text-xl  great-vibes-regular font-bold"
              />
            </div>
          ) : (
            <img
              src="/logo.png"
              alt="Logo"
              className={cn(
                "object-contain transition-all duration-300",
                "h-10 w-10"
              )}
              draggable={false}
            />
          )}
        </div>
        <div className="flex flex-col gap-1 ">
          {NavLinks.map((nav: NavProps) => (
            <NavItems key={nav.id} nav={nav} expanded={sidebarExpanded} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <AdminNavbar
          expanded={expanded}
          setExpanded={setExpanded}
          user={auth.user || null}
          onLogout={handleLogout}
        />
        <div className="p-6 w-full flex-1 overflow-auto bg-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
