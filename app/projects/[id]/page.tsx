import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Heart } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projectsData";

// Generate Static Params from static data
export async function generateStaticParams() {
    return projects.map((project) => ({ id: project.id }));
}

async function getProject(id: string) {
    const project = projects.find((p) => p.id === id);
    return project || null;
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-12">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 container mx-auto px-4 pb-12">
                    <Link href="/projects" className="inline-flex items-center text-gray-300 hover:text-brand-cyan mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                    <span className="block text-brand-cyan font-bold tracking-wider uppercase mb-2">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {project.title}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.description}
                            </p>
                        </div>

                        {/* Gallery Placeholder - to be fully implemented with Admin Gallery later */}
                        {project.gallery && project.gallery.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {project.gallery.map((img: string, idx: number) => (
                                        <img key={idx} src={img} alt="Project" className="rounded-lg" />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-6">
                        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                            <h3 className="text-xl font-bold mb-6 text-white">Project Impact</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        <p className="font-bold text-white">{project.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                        <Heart size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Beneficiaries</p>
                                        <p className="font-bold text-white">{project.stats?.beneficiaries || "N/A"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Volunteers</p>
                                        <p className="font-bold text-white">{project.stats?.volunteers || "N/A"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Service Hours</p>
                                        <p className="font-bold text-white">{project.stats?.hours || "N/A"}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
