"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="menu menu-horizontal gap-1">
      <li>
        <Link href="/" className={clsx(pathname === "/" && "active")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className={clsx(pathname === "/about" && "active")}>
          About
        </Link>
      </li>
      <li>
        <Link href="/work" className={clsx(pathname === "/work" && "active")}>
          Work
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={clsx(pathname === "/contact" && "active")}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
