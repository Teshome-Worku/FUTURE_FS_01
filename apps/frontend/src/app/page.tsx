import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f0d] text-gray-400">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold text-emerald-400">
          Welcome to FUTURE INTERNS!
        </h1>
        <p className="mt-4 text-lg">
          This is the frontend application of our monorepo. Explore the code and see how everything is structured!
        </p>


      </main>
    </div>


  );
}
