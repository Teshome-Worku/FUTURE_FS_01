import Image from "next/image";
import aboutImage from "@/assets/profile.jpg"
export default function About() {
    return (
        <section className="bg-black text-white px-6 py-20" id="about">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT - IMAGE */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-xl"></div>

                        <Image
                            src={aboutImage}
                            alt="About me"
                            className="relative w-80 h-80 object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* RIGHT - CONTENT */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-green-400">Me</span>
                    </h2>

                    <p className="text-gray-400 mb-4">
                        I’m a Full Stack Developer focused on building modern, scalable web applications that solve real-world problems.
                    </p>

                    <p className="text-gray-400 mb-4">
                        I work with technologies like Next.js, Node.js, and MongoDB to create fast, responsive, and user-friendly digital experiences.
                    </p>

                    <p className="text-gray-400 mb-4">
                        Currently, I’m focused on improving my skills through real-world projects and preparing for professional opportunities in web development.
                    </p>

                    <p className="text-gray-400">
                        I enjoy turning ideas into functional products and continuously learning better ways to build efficient and scalable systems.
                    </p>
                </div>

            </div>
        </section>
    );
}