"use client";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:5000"

export default function AdminPage() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const res = await fetch(`${API_URL}/api/contact`);
            const data = await res.json();
            setMessages(data);
        } catch (error) {
            console.error("Error fetching messages");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-3xl font-bold mb-6">
                Admin Dashboard
            </h1>

            <div className="space-y-4">
                {messages.map((msg: any, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-4 rounded-lg"
                    >
                        <p><strong>Name:</strong> {msg.name}</p>
                        <p><strong>Email:</strong> {msg.email}</p>
                        <p><strong>Message:</strong> {msg.message}</p>
                        <p className="text-sm text-gray-400">
                            {new Date(msg.createdAt).toLocaleString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}