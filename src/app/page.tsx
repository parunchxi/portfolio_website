import { Divider } from "@nextui-org/react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto mb-8 sm:px-6 px-4 flex flex-col">
        <Hero />
        <div className="sm:grid sm:grid-cols-2 sm:gap-8">
          <About />
          <Skills />
        </div>
        <Projects />
        <Educations />
      </main>
      <Divider />
      <Footer />
    </>
  );
}
