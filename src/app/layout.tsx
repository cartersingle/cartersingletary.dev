import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "React";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carter Singletary",
  description: "Personal Website",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={cn("antialiased", inter.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
