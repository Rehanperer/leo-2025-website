"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { FileText, Users, Image as ImageIcon, Newspaper, LogOut } from "lucide-react";

export default function AdminDashboard() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push("/admin");
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin");
    };

    if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-brand-cyan">Loading...</div>;
    if (!user) return null;

    const navItems = [
        { name: "Projects", icon: FileText, href: "/admin/projects", color: "text-blue-400", bg: "bg-blue-400/10" },
        { name: "Team", icon: Users, href: "/admin/team", color: "text-green-400", bg: "bg-green-400/10" },
        { name: "Newsletter", icon: Newspaper, href: "/admin/newsletter", color: "text-purple-400", bg: "bg-purple-400/10" },
        { name: "Gallery", icon: ImageIcon, href: "/admin/gallery", color: "text-pink-400", bg: "bg-pink-400/10" },
    ];

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
                        <p className="text-gray-400">Welcome back, {user.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 rounded-lg text-sm text-gray-300 transition-colors"
                    >
                        <LogOut size={16} />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:bg-gray-800 hover:border-gray-700 transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <h2 className="text-xl font-bold text-white mb-1">{item.name}</h2>
                            <p className="text-sm text-gray-500">Manage {item.name.toLowerCase()}</p>
                        </Link>
                    ))}
                </div>

                <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-2">System Actions</h3>
                    <p className="text-gray-400 text-sm mb-4">Maintenance and setup tools.</p>
                    <button
                        onClick={async () => {
                            if (!confirm("This will add demonstration data to your database. Continue?")) return;
                            try {
                                const { seedDatabase } = await import("@/lib/seed");
                                await seedDatabase();
                                alert("Database seeded successfully!");
                            } catch (e) {
                                console.error(e);
                                alert("Failed to seed database.");
                            }
                        }}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors border border-gray-700"
                    >
                        Initialize / Seed Database
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Use this if your site is empty (e.g. after first install).</p>
                </div>
            </div>
        </main>
    );
}
