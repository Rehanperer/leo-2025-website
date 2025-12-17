"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Trash2 } from "lucide-react";

interface Newsletter {
    id: string;
    title: string;
    month: string;
    year: string;
}

export default function AdminNewsletterPage() {
    const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchNewsletters = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "newsletters"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Newsletter[];
            setNewsletters(data);
        } catch (error) {
            console.error("Error fetching newsletters:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsletters();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this issue?")) return;
        try {
            await deleteDoc(doc(db, "newsletters", id));
            setNewsletters(newsletters.filter(n => n.id !== id));
        } catch (error) {
            console.error("Error deleting newsletter:", error);
            alert("Failed to delete newsletter");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/admin/dashboard" className="text-sm text-gray-500 hover:text-brand-cyan mb-2 block">← Back to Dashboard</Link>
                        <h1 className="text-3xl font-bold">Manage Newsletters</h1>
                    </div>
                    <Link
                        href="/admin/newsletter/add"
                        className="bg-brand-cyan text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-400 transition-colors"
                    >
                        <Plus size={20} />
                        Add New Issue
                    </Link>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading newsletters...</div>
                ) : newsletters.length === 0 ? (
                    <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
                        <p className="text-gray-400 mb-4">No newsletters found.</p>
                        <p className="text-sm text-gray-600">Click "Add New Issue" to publish one.</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {newsletters.map((item) => (
                            <div key={item.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-400">{item.month} {item.year}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="p-2 bg-gray-800 text-red-400 rounded-lg hover:bg-gray-700 transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
