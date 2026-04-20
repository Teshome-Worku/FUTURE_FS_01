

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 bg-black text-white">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT */}
                <div>
                    <p className="text-green-400 mb-2 text-lg">Hi, I'm</p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Teshome Worku
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-green-400 mt-4">
                        Full Stack Developer
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-lg">
                        I build scalable, high-performance web applications focused on user experience and real-world impact.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-green-500 text-black px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition">
                            View Projects
                        </button>

                        <button className="border border-green-500 px-6 py-3 rounded-lg hover:bg-green-500 hover:text-black transition">
                            Contact Me
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-green-500 blur-3xl opacity-20 rounded-full"></div>

                        {/* Image */}
                        <img
                            src="/hero-developer.png"
                            alt="Profile"
                            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-green-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}