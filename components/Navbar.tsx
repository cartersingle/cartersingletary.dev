import Link from "next/link";

import Navigation from "./Navigation";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="flex-1">
          <Link href="/" className="text-xl font-semibold">
            Carter
          </Link>
        </div>
        <div className="flex-none">
          <Navigation />
        </div>
      </nav>
    </header>
  );
}
