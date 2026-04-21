import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-400">
      <Navbar />
      <Hero />
      <About />
      <Projects />



    </div>


  );
}
