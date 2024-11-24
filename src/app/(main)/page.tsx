import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const RootPage = () => {
  return (
    <div className="mx-auto max-w-prose">
      <section className="space-y-8 py-24">
        <div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">
            Hi, I&apos;m Carter Singletary, a fullstack, student developer
            studying at USU in Logan, Utah.
          </h1>
          <p className="mb-2 text-muted-foreground">
            I love building accessibe, fast, and user friendly web applications.
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/projects">
              See my work
              <MoveRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default RootPage;
