"use client";

import { AnimatedStaggerContainer, AnimatedStaggerItem } from "@/components/AnimatedSection";

const skills = [
    {
        category: "Frontend",
        icon: (
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        items: [
            { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        ],
    },
    {
        category: "Backend",
        icon: (
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        items: [
            { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
            { name: "Express", icon: "https://cdn.simpleicons.org/express/white" },
        ],
    },
    {
        category: "Database",
        icon: (
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        items: [
            { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
            { name: "PostgreSQL ", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
        ],
    },
    {
        category: "Tools",
        icon: (
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        items: [
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
            { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
            { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
        ],
    },
];

export default function Skills() {
    return (
        <section className="bg-[#0a0f0d] text-white px-6 py-24 relative overflow-hidden" id="skills">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <p className="text-green-400 font-mono text-sm tracking-wider uppercase mb-3">Powering My Projects</p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Arsenal</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <AnimatedStaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((group, index) => (
                        <AnimatedStaggerItem key={index} className="h-full">
                            <div className="h-full flex flex-col bg-zinc-900/60 border border-white/5 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-500/10 hover:border-white/10 transition-all duration-300 group cursor-pointer backdrop-blur-md">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                                    <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                                        {group.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-200">
                                        {group.category}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <ul className="space-y-4 pt-2">
                                    {group.items.map((skill, i) => (
                                        <li key={i} className="flex items-center gap-3 group/item">
                                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center p-1.5 border border-white/5 group-hover/item:border-green-400/30 group-hover/item:scale-110 transition-all">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-gray-400 font-medium group-hover/item:text-green-400 transition-colors">
                                                {skill.name}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedStaggerItem>
                    ))}
                </AnimatedStaggerContainer>

            </div>
        </section>
    );
}