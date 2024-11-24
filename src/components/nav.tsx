import Link from "next/link";
import {
  BookOpen,
  Home,
  NotebookPen,
  PanelsTopLeft,
  UserCircle,
} from "lucide-react";

const routes = [
  {
    Icon: Home,
    label: "Home",
    href: "/",
  },
  {
    Icon: BookOpen,
    label: "Blog",
    href: "/blog",
  },
  {
    Icon: PanelsTopLeft,
    label: "Projects",
    href: "/projects",
  },
  {
    Icon: NotebookPen,
    label: "Notes",
    href: "/notes",
  },
];

export const Nav = () => {
  return (
    <header className="flex h-20 w-full items-center justify-center">
      <nav className="flex items-center gap-4 rounded-full border px-3 py-2">
        {routes.map((route) => (
          <Link
            key={route.label}
            href={route.href}
            className="flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-colors hover:bg-muted"
          >
            <route.Icon className="size-4" />
            {route.label}
          </Link>
        ))}
        <Link
          href="/account"
          className="rounded-full p-2 transition-colors hover:bg-muted"
        >
          <UserCircle className="size-5" />
        </Link>
      </nav>
    </header>
  );
};
