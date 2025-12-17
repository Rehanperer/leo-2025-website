"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Plus, Trash2, Edit } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    date: string;
}

export default function AdminProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchProjects = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const projectsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as Project[];
            setProjects(projectsData);
        } catch (error) {
            console.error("Error fetching projects:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this project?")) return;
        try {
            await deleteDoc(doc(db, "projects", id));
            setProjects(projects.filter(p => p.id !== id));
        } catch (error) {
            console.error("Error deleting project:", error);
            alert("Failed to delete project");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/admin/dashboard" className="text-sm text-gray-500 hover:text-brand-cyan mb-2 block">← Back to Dashboard</Link>
                        <h1 className="text-3xl font-bold">Manage Projects</h1>
                    </div>
                    <Link
                        href="/admin/projects/add"
                        className="bg-brand-cyan text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-400 transition-colors"
                    >
                        <Plus size={20} />
                        Add New Project
                    </Link>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading projects...</div>
                ) : projects.length === 0 ? (
                    <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
                        <p className="text-gray-400 mb-4">No projects found in database.</p>
                        <p className="text-sm text-gray-600">Click "Add New Project" to get started.</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-lg text-white">{project.title}</h3>
                                    <p className="text-sm text-gray-400">{project.category} • {project.date}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link
                                        href={`/admin/projects/edit/${project.id}`}
                                        className="p-2 bg-gray-800 text-blue-400 rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project.id)}
                                        className="p-2 bg-gray-800 text-red-400 rounded-lg hover:bg-gray-700 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
