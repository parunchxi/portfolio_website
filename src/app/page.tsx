import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container max-w-screen-2xl mx-auto sm:px-6 px-4">
        <Hero />
        <div className="min-h-screen text-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos pariatur
          ducimus eaque animi libero autem, laboriosam ratione non nostrum,
          nulla rerum esse corporis quaerat molestiae excepturi a tempore alias!
          Molestias unde deserunt, deleniti ullam recusandae aperiam, ratione
          iste quod expedita ut cum animi earum ex aliquam blanditiis,
          reprehenderit at laboriosam?
        </div>
      </main>
    </>
  );
}
