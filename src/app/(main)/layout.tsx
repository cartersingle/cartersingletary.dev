import { Nav } from "@/components/nav";
import { type ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default MainLayout;
