"use client";

import Image from "next/image";
import aboutImage from "@/assets/profile.jpg";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
    return (
        <section className="bg-[#0a0f0d] text-white px-6 py-24 relative overflow-hidden" id="about">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
                <div className="absolute bottom-0 -left-1/4 w-80 h-80 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">

                {/* LEFT - IMAGE */}
                <AnimatedSection variant="fadeInLeft" className="w-full flex justify-center relative group">
                    <div className="relative isolate z-10">
                        {/* Interactive Glow Behind Image */}
                        <div className="absolute -inset-2 bg-linear-to-tr from-green-500 to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-700"></div>

                        <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
                            <Image
                                src={aboutImage}
                                alt="About me"
                                className="relative w-80 sm:w-96 h-[416px] sm:h-[480px] object-cover object-top grayscale-15 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
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
                </AnimatedSection>

                {/* RIGHT - CONTENT */}
                <AnimatedSection variant="fadeInRight" delay={0.2} className="space-y-8">
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
                    <div className="space-y-5 text-gray-400 leading-relaxed text-lg font-light max-w-lg">
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

                    {/* Highlights Section */}
                    <div className="pt-8 border-t border-white/5 max-w-lg">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Highlight 1 */}
                            <div className="bg-gray-900/50 p-4 rounded-xl border border-white/5 hover:bg-gray-800 hover:border-gray-700 transition-colors duration-300">
                                <p className="text-lg font-semibold text-white">1+ Years</p>
                                <p className="text-xs text-gray-400 mt-1">Experience</p>
                            </div>

                            {/* Highlight 2 */}
                            <div className="bg-gray-900/50 p-4 rounded-xl border border-white/5 hover:bg-gray-800 hover:border-gray-700 transition-colors duration-300">
                                <p className="text-lg font-semibold text-white">6+ Real</p>
                                <p className="text-xs text-gray-400 mt-1">Projects Built</p>
                            </div>

                            {/* Highlight 3 */}
                            <div className="bg-gray-900/50 p-4 rounded-xl border border-white/5 hover:bg-gray-800 hover:border-gray-700 transition-colors duration-300">
                                <p className="text-lg font-semibold text-emerald-400">Focus on</p>
                                <p className="text-xs text-gray-400 mt-1">Real-World Solutions</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
}