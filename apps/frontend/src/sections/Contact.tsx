"use client";
import { useState } from "react";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const email = "teshomeworku96@gmail.com";
const phone = "+251 955 80 0626";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// SVGs
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475v-1.875c-2.775.6-3.362-1.225-3.362-1.225-.45-1.15-1.112-1.462-1.112-1.462-.912-.612.062-.6.062-.6 1.012.075 1.55 1.037 1.55 1.037.9 1.538 2.363 1.1 2.938.838.088-.65.35-1.1.65-1.35-2.225-.25-4.563-1.112-4.563-4.937 0-1.088.388-1.975 1.025-2.675-.1-.263-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.025a9.28 9.28 0 0 1 2.5-.337 9.3 9.3 0 0 1 2.5.337c1.9-1.288 2.75-1.025 2.75-1.025.55 1.375.2 2.387.1 2.65.65.7 1.025 1.587 1.025 2.675 0 3.837-2.35 4.675-4.575 4.925.362.312.675.912.675 1.85v2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const Loader2Icon = ({ className = "" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ml-2 -mr-1 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
    const [error, setError] = useState("");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setLoading(true);
        setStatus("");

        try {
            const res = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("Message sent successfully ✅");
                setForm({ name: "", email: "", message: "" });
                setTimeout(() => {
                    setStatus("");
                }, 3000)
            } else {
                setError(data.message || "Something went wrong ❌");
                setTimeout(() => {
                    setError("");
                }, 3000)
            }
        } catch (error) {
            setError("Server error ❌");
            setTimeout(() => {
                setError("");
            }, 3000)
        }

        setLoading(false);
    };


    return (
        <section className="relative bg-[#0a0f0d] text-white py-24 px-6 lg:px-10 overflow-hidden" id="contact">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                {/* LEFT SIDE: Info */}
                <AnimatedSection variant="fadeInLeft" className="space-y-10">
                    <div className="space-y-4 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Get In <span className="text-emerald-400">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            I&apos;m open to freelance opportunities, collaborations, or full-time roles.
                            If you have a project or just want to connect, feel free to reach out.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm hover:bg-gray-900/50 hover:border-emerald-500/30 transition-colors duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                <PhoneIcon />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Phone</p>
                                <Link href={"tel:+251955800626"} target="_blank" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                                    {phone}
                                </Link>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm hover:bg-gray-900/50 hover:border-emerald-500/30 transition-colors duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                <MailIcon />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                                <Link href={`mailto:${email}`} target="_blank" className="text-lg font-medium hover:text-emerald-400 transition-colors">
                                    {email}
                                </Link>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-gray-900/30 border border-white/5 backdrop-blur-sm hover:bg-gray-900/50 hover:border-emerald-500/30 transition-colors duration-300">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                                <MapPinIcon />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">Location</p>
                                <p className="text-lg font-medium text-gray-300">Adama, Ethiopia</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
                        <Link
                            href="https://github.com/Teshome-Worku"
                            target="_blank"
                            title="GitHub"
                            className="p-3 rounded-full bg-gray-900/50 border border-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300"
                        >
                            <GitHubIcon />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/teshome-worku-017834392"
                            target="_blank"
                            title="LinkedIn"
                            className="p-3 rounded-full bg-gray-900/50 border border-white/5 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-300"
                        >
                            <LinkedInIcon />
                        </Link>
                    </div>
                </AnimatedSection>

                {/* RIGHT SIDE: Form */}
                <AnimatedSection variant="fadeInRight" delay={0.2} className="relative">
                    {/* Glow behind form */}
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[50px] rounded-4xl pointer-events-none" />

                    <form
                        onSubmit={handleSubmit}
                        className="relative bg-gray-900/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl space-y-6" >
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-white">Send a message</h3>

                            <p className="text-sm text-gray-400">I&apos;ll get back to you as soon as possible.</p>
                        </div>
                        {status && (
                            <p className="text-center text-sm text-green-400">{status}</p>
                        )}
                        {error && (
                            <p className="text-center text-sm text-red-400">{error}</p>
                        )}

                        <div className="space-y-4 pt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1" htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    required
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="group w-full inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide rounded-xl bg-emerald-500 text-[#0a0f0d] hover:bg-emerald-400 hover:shadow-[0_0_24px_rgba(52,211,153,0.35)] active:scale-[0.98] transition-all duration-300"
                        >
                            <span>{loading ? "Sending..." : "Send Message"}</span>
                            {loading ? <Loader2Icon className="animate-spin" /> : <SendIcon />}
                        </button>


                    </form>
                </AnimatedSection>
            </div>
        </section>
    );
}
