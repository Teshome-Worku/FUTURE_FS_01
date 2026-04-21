import Image from "next/image";
import Link from "next/link";
import heroDeveloper from "@/assets/hero-developer.png"

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 lg:px-10 bg-[#0a0f0d] text-white overflow-hidden pt-20"
        >
            {/* Background elements for depth */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                {/* Left Side - Text */}
                <div className="order-1 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                    <div className="space-y-4">
                        <p className="text-emerald-400 font-medium tracking-wide pt-4 lg:pt-0">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                            Teshome Worku
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                            Full Stack <span className="font-semibold text-white">Developer</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 max-w-lg mt-6 leading-relaxed">
                            I design and build scalable, high-performance web applications focused on intuitive user experiences and real-world impact.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl bg-emerald-500 text-[#0a0f0d] hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.35)] active:scale-[0.98] transition-all duration-300"
                        >
                            View Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-xl border border-gray-700 bg-gray-900/50 text-gray-300 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/5 active:scale-[0.98] transition-all duration-300"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="order-2 lg:order-2 flex justify-center lg:justify-end w-full">
                    <div className="relative group">
                        {/* Soft background glow */}
                        <div className="absolute -inset-4 bg-emerald-500/20 blur-[60px] opacity-70 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />

                        {/* Image Container */}
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-105 lg:h-105 rounded-3xl overflow-hidden bg-gray-900/40 backdrop-blur-sm border border-white/5 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:rotate-1">
                            {/* Inner gradient overlay for better blending */}
                            <div className="absolute inset-0 bg-linear-to-tr from-[#0a0f0d]/40 via-transparent to-transparent z-10 pointer-events-none" />

                            <Image
                                src={heroDeveloper}
                                alt="Abstract Developer Illustration"
                                fill
                                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}