"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase";
import { Trash2, Upload } from "lucide-react";

interface GalleryImage {
    id: string;
    url: string;
    name: string;
}

export default function AdminGalleryPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    const fetchImages = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "gallery"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as GalleryImage[];
            setImages(data);
        } catch (error) {
            console.error("Error fetching gallery:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this image?")) return;
        try {
            await deleteDoc(doc(db, "gallery", id));
            setImages(images.filter(img => img.id !== id));
        } catch (error) {
            console.error("Error deleting image:", error);
            alert("Failed to delete image");
        }
    };

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) return;
        const file = e.target.files[0];
        setUploading(true);

        try {
            const storageRef = ref(storage, `gallery/${Date.now()}_${file.name}`);
            const snapshot = await uploadBytes(storageRef, file);
            const url = await getDownloadURL(snapshot.ref);

            const docRef = await addDoc(collection(db, "gallery"), {
                url,
                name: file.name,
                createdAt: new Date()
            });

            setImages([...images, { id: docRef.id, url, name: file.name }]);
        } catch (error) {
            console.error("Error uploading image:", error);
            alert("Upload failed");
        } finally {
            setUploading(false);
        }
    };

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/admin/dashboard" className="text-sm text-gray-500 hover:text-brand-cyan mb-2 block">← Back to Dashboard</Link>
                        <h1 className="text-3xl font-bold">Manage Gallery</h1>
                    </div>
                    <label className="bg-brand-cyan text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-cyan-400 transition-colors cursor-pointer">
                        <Upload size={20} />
                        Upload New Image
                        <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={uploading} />
                    </label>
                </div>

                {loading ? (
                    <div className="text-center py-20 text-gray-500">Loading gallery...</div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 bg-gray-900 rounded-xl border border-gray-800">
                        <p className="text-gray-400">No images in gallery.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {images.map((img) => (
                            <div key={img.id} className="relative group aspect-square rounded-xl overflow-hidden bg-gray-900">
                                <img src={img.url} alt="Gallery" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => handleDelete(img.id)}
                                        className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <Trash2 size={20} />
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
