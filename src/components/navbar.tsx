import { Binary } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { ROUTES } from "@/lib/constants";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="container flex h-14 items-center justify-between">
      <Link href="/" className="p-2 rounded-md bg-primary">
        <Binary className="size-5 text-primary-foreground" />
      </Link>
      <ul className="flex items-center gap-2">
        {ROUTES.map((route) => (
          <li key={route.label}>
            <Button variant="ghost" asChild>
              <Link href={route.href}>{route.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
      <ModeToggle />
    </nav>
  );
};
