import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-400">
      <Navbar />
      <Hero />
      <About />



    </div>


  );
}
