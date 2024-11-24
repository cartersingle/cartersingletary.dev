import { Nav } from "@/components/nav";
import { type PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default MainLayout;
