import { Nav } from "@/components/nav";
import { type ReactNode } from "React";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default MainLayout;
