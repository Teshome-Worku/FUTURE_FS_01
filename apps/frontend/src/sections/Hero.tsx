import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-[#0a0f0d] text-gray-400 px-6 lg:px-10"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Text Content */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="text-emerald-400">Hi, I&apos;m </span>
                            <span className="text-white">Teshome Worku</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-emerald-300">
                            Full Stack Developer
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-lg">
                            I build scalable and user-focused web applications that deliver exceptional experiences.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-emerald-500 text-[#0a0f0d] hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.35)] active:scale-[0.97] transition-all duration-300 ease-out"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-[#0a0f0d] hover:shadow-[0_0_24px_rgba(52,211,153,0.35)] active:scale-[0.97] transition-all duration-300 ease-out"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-100 lg:h-100 rounded-full overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYW50b3N8fHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                            alt="Teshome Worku - Full Stack Developer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}