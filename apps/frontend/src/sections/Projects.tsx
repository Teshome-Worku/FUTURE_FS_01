"use client";

import Image from 'next/image';
import Link from 'next/link';
import mamiFood from '@/assets/mami-food.png';
import addisHomes from '@/assets/addis-homes.png';
import infnova from '@/assets/infnova.png';
import lemi from '@/assets/lemi.png';
import urji from '@/assets/urji-photo.png';
import complaint_tracker from '@/assets/astu-tracker.png'
import { AnimatedStaggerContainer, AnimatedStaggerItem } from '@/components/AnimatedSection';

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
        <section className="bg-[#0a0f0d] text-white px-6 py-20" id="projects">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-green-400">Work</span>
                </h2>

                {/* Grid */}
                <AnimatedStaggerContainer className="grid md:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <AnimatedStaggerItem key={index} className="h-full">
                            <div className="h-full flex flex-col bg-gray-900/60 border border-white/5 rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)] hover:scale-[1.02] hover:border-emerald-500/20 transition-all duration-300">
                                {/* Image */}
                                <div className="relative w-full h-48 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link
                                            href={project.live}
                                            className="text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                                            target='_blank'
                                        >
                                            Live Demo
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </Link>
                                        <Link
                                            href={project.github}
                                            className="text-sm font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                                            target='_blank'
                                        >
                                            GitHub
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </AnimatedStaggerItem>
                    ))}
                </AnimatedStaggerContainer>

            </div>
        </section>
    );
}