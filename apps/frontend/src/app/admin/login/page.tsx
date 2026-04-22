"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e: any) => {
        e.preventDefault();

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("token", data.token);
            router.push("/admin");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <form onSubmit={handleLogin} className="bg-gray-900 p-6 rounded space-y-4">
                <h2 className="text-xl font-bold">Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 bg-black border border-gray-700"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 bg-black border border-gray-700"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="w-full bg-green-500 py-2">
                    Login
                </button>
            </form>
        </div>
    );
}