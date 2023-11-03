import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Educations from "@/components/Educations";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container max-w-screen-2xl mx-auto sm:px-6 px-4 flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Educations />
      </main>
    </>
  );
}
