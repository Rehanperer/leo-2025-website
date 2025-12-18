"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export default function AddProjectPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "Community Service",
        description: "",
        date: "",
        beneficiaries: "",
        volunteers: "",
        hours: "",
        instagramEmbed: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        console.log("--- Starting Project Submission ---");
        // Debug: Check if env vars are present (without logging full secrets)
        console.log("Environment Check:", {
            apiKeyPresent: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
            authDomainPresent: !!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
            projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
        });

        try {
            let imageUrl = "";

            // 1. Upload Image
            if (imageFile) {
                console.log("Attempting Image Upload...", imageFile.name);
                const storageRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
                const snapshot = await uploadBytes(storageRef, imageFile);
                console.log("Image Uploaded Snapshot:", snapshot);
                imageUrl = await getDownloadURL(snapshot.ref);
                console.log("Image URL retrieved:", imageUrl);
            } else {
                console.log("No image file selected, skipping upload.");
            }

            // 2. Add Document to Firestore
            console.log("Attempting Firestore AddDoc...");
            await addDoc(collection(db, "projects"), {
                title: formData.title,
                category: formData.category,
                description: formData.description,
                date: formData.date,
                image: imageUrl, // Store the URL
                stats: {
                    beneficiaries: formData.beneficiaries,
                    volunteers: formData.volunteers,
                    hours: formData.hours
                },
                gallery: [], // Placeholder for gallery
                instagramEmbed: formData.instagramEmbed,
                createdAt: new Date()
            });
            console.log("Firestore AddDoc Success!");

            alert("Project added successfully!");
            router.push("/admin/projects");
        } catch (error) {
            console.error("FULL SUBMISSION ERROR:", error);
            alert("Failed to add project. Check console for details.");
        } finally {
            console.log("--- Submission Flow Finished ---");
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link href="/admin/projects" className="text-sm text-gray-500 hover:text-brand-cyan mb-4 block">← Back to Projects</Link>
                <h1 className="text-3xl font-bold mb-8">Add New Project</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Project Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            >
                                <option>Community Service</option>
                                <option>Fundraising</option>
                                <option>Environmental</option>
                                <option>Health</option>
                                <option>Youth Development</option>
                            </select>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Cover Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-cyan file:text-black hover:file:bg-cyan-400"
                        />
                        <p className="text-xs text-gray-500 mt-1">Uploads to Firebase Storage</p>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                        <textarea
                            name="description"
                            required
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                        />
                    </div>

                    {/* Instagram Embed */}
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Instagram Embed URL (Optional)</label>
                        <input
                            type="text"
                            name="instagramEmbed"
                            placeholder="e.g. https://www.instagram.com/p/..."
                            value={formData.instagramEmbed}
                            onChange={handleChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                        />
                    </div>

                    {/* Stats & Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Date</label>
                            <input
                                type="text"
                                name="date"
                                placeholder="e.g. October 2024"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Beneficiaries (Stats)</label>
                            <input
                                type="text"
                                name="beneficiaries"
                                placeholder="e.g. 500+"
                                value={formData.beneficiaries}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Volunteers (Stats)</label>
                            <input
                                type="text"
                                name="volunteers"
                                placeholder="e.g. 20"
                                value={formData.volunteers}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Hours (Stats)</label>
                            <input
                                type="text"
                                name="hours"
                                placeholder="e.g. 50"
                                value={formData.hours}
                                onChange={handleChange}
                                className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                            />
                        </div>
                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-cyan text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50 mt-6"
                    >
                        {loading ? "Adding Project..." : "Add Project"}
                    </button>
                </form>
            </div>
        </main>
    );
}
