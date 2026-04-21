const skills = [
    {
        category: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB", "Postgres"],
    },
    {
        category: "Tools",
        items: ["Git", "GitHub", "VS Code", "Figma"],
    },
];

export default function Skills() {
    return (
        <section className="bg-black text-white px-6 py-20" id="skills">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-green-400">Skills</span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-4 gap-8">
                    {skills.map((group, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-green-400">
                                {group.category}
                            </h3>

                            <ul className="space-y-2 text-gray-300">
                                {group.items.map((skill, i) => (
                                    <li key={i}>• {skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}