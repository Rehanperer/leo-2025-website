"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";

export default function AddTeamPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        category: "Executive Officer"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

        try {
            let imageUrl = "";
            if (imageFile) {
                const storageRef = ref(storage, `team/${Date.now()}_${imageFile.name}`);
                const snapshot = await uploadBytes(storageRef, imageFile);
                imageUrl = await getDownloadURL(snapshot.ref);
            }

            await addDoc(collection(db, "team"), {
                ...formData,
                image: imageUrl,
                createdAt: new Date()
            });

            alert("Member added successfully!");
            router.push("/admin/team");
        } catch (error) {
            console.error("Error adding member:", error);
            alert("Failed to add member.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                <Link href="/admin/team" className="text-sm text-gray-500 hover:text-brand-cyan mb-4 block">← Back to Team</Link>
                <h1 className="text-3xl font-bold mb-8">Add Team Member</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
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
                                <option>Executive Officer</option>
                                <option>Director</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Role (e.g. President)</label>
                        <input
                            type="text"
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Photo</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-cyan outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-cyan file:text-black hover:file:bg-cyan-400"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-cyan text-black font-bold py-4 rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50 mt-6"
                    >
                        {loading ? "Adding Member..." : "Add Team Member"}
                    </button>
                </form>
            </div>
        </main>
    );
}
