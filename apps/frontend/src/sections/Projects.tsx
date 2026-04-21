import Image from 'next/image';
import Link from 'next/link';
import mamiFood from '@/assets/mami-food.png';
import addisHomes from '@/assets/addis-homes.png';
import infnova from '@/assets/infnova.png';
import lemi from '@/assets/lemi.png';
import urji from '@/assets/urji-photo.png';
import complaint_tracker from '@/assets/astu-tracker.png'


const projects = [
    {
        title: "Mami Food — Food Ordering Platform",
        description:
            "A full-stack food ordering system that allows users to place orders online and track them in real time.",
        tech: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/Teshome-Worku/mami-food-order",
        live: "https://mamifood.vercel.app/",
        image: mamiFood
    },
    {
        title: "Addis Homes — Real Estate Platform",
        description:
            "A modern real estate platform where users can explore properties, view details, and find homes easily with a clean and engaging UI.",
        tech: ["Next.js", "Tailwind CSS"],
        github: "https://github.com/Teshome-Worku/addis-homes",
        live: "#",
        image: addisHomes,
    },
    {
        title: "Infnova Academy — Course Platform",
        description:
            "A responsive course listing and detail web application that allows users to browse courses and view structured learning content.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/Teshome-Worku/infnova-academy",
        live: "https://infnova-tech-academy.vercel.app/",
        image: infnova,
    },

    {
        title: "Lemi Fashion — Online Store System",
        description:
            "An online clothing store that enables customers to browse products and place orders instantly via Telegram integration.",
        tech: ["React", "Node.js"],
        github: "https://github.com/Teshome-Worku/lemi-fashion",
        live: "https://lemi-fashion.vercel.app/",
        image: lemi,
    },
    {
        title: "Urji Photography — Business Website",
        description:
            "A clean and modern website designed to showcase photography services and attract potential clients.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/Teshome-Worku/urji-photography",
        live: "#",
        image: urji,
    },
    {
        title: "Smart Complaint Management System",
        description:
            "A system that allows users to submit, track, and manage complaints efficiently with structured workflows and status updates.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/Teshome-Worku/astu-complaint-tracker",
        live: "https://astu-complaint-tracker.vercel.app/",
        image: complaint_tracker,
    },


];

export default function Projects() {
    return (
        <section className="bg-black text-white px-6 py-20" id="projects">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-green-400">Work</span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition cursor-pointer"
                        >
                            {/* Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-green-500/10 text-green-400 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <Link
                                        href={project.live}
                                        className="text-sm text-green-400 hover:underline"
                                        target='_blank'
                                    >
                                        Live Demo
                                    </Link>
                                    <Link
                                        href={project.github}
                                        className="text-sm text-green-400 hover:underline"
                                        target='_blank'
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}