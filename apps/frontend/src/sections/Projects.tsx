const projects = [
    {
        title: "Mami Food Ordering Platform",
        description:
            "A full-stack food ordering system with real-time order tracking and responsive UI.",
        tech: ["Next.js", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
        image: "/project1.png",
    },
    {
        title: "E-Learning Platform",
        description:
            "An online learning platform with course management and user authentication.",
        tech: ["React", "Express", "MongoDB"],
        github: "#",
        live: "#",
        image: "/project2.png",
    },
];

export default function Projects() {
    return (
        <section className="bg-black text-white px-6 py-20" id="projects">
            <div className="max-w-6xl mx-auto">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-green-400">Projects</span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition"
                        >
                            {/* Image */}
                            <img
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
                                    <a
                                        href={project.live}
                                        className="text-sm text-green-400 hover:underline"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="text-sm text-green-400 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}