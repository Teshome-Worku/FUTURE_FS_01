import Link from "next/link";

const email = 'teshomeworku96@gmail.com'
const phone = "+251 955 80 0626"
export default function Contact() {
    return (
        <section className="bg-black text-white px-6 py-20" id="contact">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT SIDE */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Get In <span className="text-green-400">Touch</span>
                    </h2>

                    <p className="text-gray-400 mb-6">
                        I’m open to freelance opportunities, collaborations, or full-time roles.
                        If you have a project or just want to connect, feel free to reach out.
                    </p>
                    <p>
                        Phone:{" "}
                        <Link href={"tel:+251955800626"}>
                            <span className="text-green-400">
                                {phone}

                            </span>
                        </Link>


                    </p>

                    {/* Email */}
                    <p className="mb-4">
                        📧 Email:{" "}
                        <Link href={`mailto:${email}`}>
                            <span className="text-green-400">
                                {email}
                            </span>
                        </Link>

                    </p>

                    {/* Socials */}
                    <div className="flex gap-4 mt-4">
                        <Link href="https://github.com/Teshome-Worku" className="text-green-400 hover:underline">
                            GitHub
                        </Link>
                        <Link href="https://www.linkedin.com/in/teshome-worku-017834392" className="text-green-400 hover:underline">
                            LinkedIn
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE - FORM */}
                <form className="bg-gray-900 p-6 rounded-xl space-y-4">

                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-green-400"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-green-400"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 rounded bg-black border border-gray-700 focus:outline-none focus:border-green-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-black py-3 rounded font-medium hover:bg-green-400 transition"
                    >
                        Send Message
                    </button>

                </form>

            </div>
        </section>
    );
}