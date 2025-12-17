"use client";

import { useEffect, useState } from "react";
import DomeGallery from "@/components/DomeGallery";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function GalleryPage() {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "gallery"));
                const urls = querySnapshot.docs.map(doc => doc.data().url as string);

                // Fallback to static if empty, or just show empty? 
                // User asked to "Add and delete images", so we should show DB images.
                // If DB is empty, maybe show nothing or keep the static list as initial seed?
                // I will prioritize DB images, but if empty, I'll allow the DomeGallery to handle it or show a message.
                // Actually, let's mix or just use DB. User wants to "delete", so it must be DB.
                setImages(urls);
            } catch (e) {
                console.error("Gallery fetch error", e);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    if (loading) return <div className="h-screen bg-black flex items-center justify-center text-white">Loading Gallery...</div>;

    return (
        <div className="w-full h-screen bg-black">
            {images.length > 0 ? (
                <DomeGallery images={images} />
            ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                    No images in gallery yet.
                </div>
            )}
        </div>
    );
}
