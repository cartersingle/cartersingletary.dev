import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col-reverse sm:flex-row gap-2">
        <div className="card flex-1 bg-gradient-to-br from-green-300/25 via-blue-500/25 to-purple-600/25">
          <div className="card-body">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Hey, I&#39;m Carter, a Student Developer with 2 years of
                experience.
              </h1>
              <p className="mt-3 font-light">
                I currently study at{" "}
                <a
                  href="https://usu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  USU
                </a>{" "}
                and work on projects for{" "}
                <a
                  href="https://usu.edu/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  USU Accessibilty
                </a>
                .
              </p>
              <div className=" mt-20 card-actions">
                <button className="btn btn-primary rounded-full px-8">
                  View my work
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card overflow-hidden">
          <Image
            src={"/hero.jpeg"}
            width={300}
            height={400}
            alt="Carter Singletary"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
