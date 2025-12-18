import DomeGallery from "@/components/DomeGallery";
import fs from "fs";
import path from "path";

export default function GalleryPage() {
    const galleryDir = path.join(process.cwd(), "public/gallery");
    let images: string[] = [];

    try {
        if (fs.existsSync(galleryDir)) {
            const files = fs.readdirSync(galleryDir);
            images = files
                .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
                // Map to the public URL
                .map((file) => `/gallery/${file}`);
        } else {
            console.warn("Gallery directory not found:", galleryDir);
        }
    } catch (error) {
        console.error("Error reading gallery directory:", error);
    }

    return (
        <div className="w-full h-screen bg-black">
            {images.length > 0 ? (
                <DomeGallery images={images} />
            ) : (
                <div className="h-full flex items-center justify-center text-gray-500">
                    No images found in gallery.
                </div>
            )}
        </div>
    );
}
