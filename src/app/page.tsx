import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container max-w-screen-2xl mx-auto sm:px-6 px-4">
        <Hero />
        <div className="min-h-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          aperiam cum nesciunt veritatis et qu am quia vero, perferendis, sit
          nostrum fugiat quae accusantium quaerat atque facilis soluta quisquam
          ratione deleniti?
        </div>
      </main>
    </>
  );
}
