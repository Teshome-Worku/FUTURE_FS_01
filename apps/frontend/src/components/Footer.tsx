export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto text-center">

                {/* Name / Brand */}
                <h3 className="text-xl font-semibold mb-2">
                    Teshome Worku
                </h3>

                {/* Optional tagline */}
                <p className="text-gray-400 text-sm mb-6">
                    Full Stack Developer building modern web applications
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6 mb-6">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-green-400 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:your@email.com"
                        className="text-gray-400 hover:text-green-400 transition"
                    >
                        Email
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-4">

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Teshome Worku. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
}