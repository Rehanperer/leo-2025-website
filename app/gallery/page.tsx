"use client";

import { useState } from "react";
import DomeGallery from "@/components/DomeGallery";
// Import static data
import { galleryImages } from "@/lib/galleryData";

export default function GalleryPage() {
    // Use static data directly
    const [images] = useState<string[]>(galleryImages);
    const [loading] = useState(false);

    /*
    useEffect(() => {
        const fetchImages = async () => {
           // ...
        };
        fetchImages();
    }, []);
    */

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
