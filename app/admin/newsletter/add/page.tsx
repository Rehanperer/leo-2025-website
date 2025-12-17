"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AddNewsletterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "Origins Issue 1",
        month: "December",
        year: "2024",
        coverText: "ORIGINS",
        coverColor: "from-blue-900 to-blue-600",
        embedUrl: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generateSlug = (title: string) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "newsletters"), {
                ...formData,
                slug: generateSlug(formData.title),
                coverParams: {
                    text: formData.coverText,
                    color: formData.coverColor
                },
                createdAt: new Date()
            });

            alert("Newsletter added successfully!");
            router.push("/admin/newsletter");
        } catch (error) {
            console.error("Error adding newsletter:", error);
            alert("Failed to add newsletter.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link href="/admin/newsletter" className="text-sm text-gray-500 hover:text-brand-cyan mb-4 block">← Back to Newsletters</Link>
                <h1 className="text-3xl font-bold mb-8">Add New Newsletter</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Month</label>
                            <select name="month" value={formData.month} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none">
                                {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => (
                                    <option key={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                            <input type="text" name="year" value={formData.year} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none" />
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-6">
                        <h3 className="text-xl font-bold mb-4 text-brand-cyan">Cover Settings</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Cover Text (e.g. ORIGINS)</label>
                                <input type="text" name="coverText" value={formData.coverText} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Color Theme</label>
                                <select name="coverColor" value={formData.coverColor} onChange={handleChange} className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none">
                                    <option value="from-blue-900 to-blue-600">Blue Ocean (Origins)</option>
                                    <option value="from-purple-900 to-pink-600">Purple Haze</option>
                                    <option value="from-emerald-900 to-green-600">Emerald Green</option>
                                    <option value="from-orange-900 to-red-600">Sunset Red</option>
                                    <option value="from-gray-900 to-black">Dark Carbon</option>
                                </select>
                            </div>
                        </div>
                        <div className={`mt-4 h-32 rounded-xl bg-gradient-to-br ${formData.coverColor} flex items-center justify-center`}>
                            <span className="text-2xl font-bold font-serif italic text-white/50">{formData.coverText}</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">AnyFlip Embed URL</label>
                        <p className="text-xs text-gray-500 mb-2">Paste the full URL (e.g. https://online.anyflip.com/mpvfm/dwwa/index.html)</p>
                        <input
                            type="text"
                            name="embedUrl"
                            required
                            value={formData.embedUrl}
                            onChange={handleChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-cyan text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50 mt-6"
                    >
                        {loading ? "Adding Issue..." : "Publish Newsletter"}
                    </button>
                </form>
            </div>
        </main>
    );
}
