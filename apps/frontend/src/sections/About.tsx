import Image from "next/image";
import aboutImage from "@/assets/profile.jpg"

export default function About() {
    const skills = [
        "Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB"
    ];

    return (
        <section className="bg-black text-white px-6 py-24 relative overflow-hidden" id="about">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-0 -left-1/4 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">

                {/* LEFT - IMAGE */}
                <div className="flex justify-center relative group">
                    <div className="relative isolate z-10">
                        {/* Interactive Glow Behind Image */}
                        <div className="absolute -inset-2 bg-linear-to-tr from-green-500 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                            <Image
                                src={aboutImage}
                                alt="About me"
                                className="relative w-80 sm:w-96 h-104 sm:h-120 object-cover object-center grayscale-15 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl shadow-black/50 transform group-hover:-translate-y-4 group-hover:-rotate-3 transition-all duration-500 z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-medium">Focus</p>
                                    <p className="text-xl font-bold text-white">Full Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT - CONTENT */}
                <div className="space-y-8">
                    {/* Header */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">Discover More</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4">
                            About <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-300">Me</span>
                        </h2>
                    </div>

                    {/* Text content with improved typography */}
                    <div className="space-y-5 text-gray-400 leading-relaxed text-lg font-light">
                        <p className="text-gray-200 font-medium text-xl leading-snug">
                            I’m a Full Stack Developer focused on building modern, scalable web applications that solve real-world problems.
                        </p>

                        <p>
                            I work with modern technologies like Next.js, Node.js, and MongoDB to create fast, responsive, and user-friendly digital experiences. Turning complex ideas into elegant, intuitive interfaces is my passion.
                        </p>

                        <p>
                            I’m relentlessly focused on improving my skills through hands-on projects and preparing for professional opportunities. I believe in continuous learning to adapt to the ever-evolving tech landscape.
                        </p>
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-6 border-t border-white/10">
                        <p className="text-sm font-semibold text-white mb-5 uppercase tracking-widest text-opacity-80">Core Arsenal</p>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/10 hover:shadow-[0_0_15px_rgba(74,222,128,0.15)] transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}