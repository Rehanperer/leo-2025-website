"use client";

import { useEffect, useState } from "react";

export default function ConnectivityWarning() {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        const handler = (event: PromiseRejectionEvent) => {
            // Check for known blocking signatures
            const errorString = event.reason?.stack || event.reason?.toString() || "";

            // "frame_ant.js" is the signature of Ant Video Downloader
            if (errorString.includes("frame_ant.js") || errorString.includes("Ant Video Downloader")) {
                setBlocked(true);
            }
        };

        window.addEventListener("unhandledrejection", handler);

        // Also check if the script is injected in the DOM (sometimes it injects a visible script tag)
        const checkDom = () => {
            const scripts = document.querySelectorAll('script');
            scripts.forEach(s => {
                if (s.src && s.src.includes('frame_ant.js')) setBlocked(true);
            });
        };
        checkDom();

        return () => window.removeEventListener("unhandledrejection", handler);
    }, []);

    if (!blocked) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-4 z-[9999] shadow-2xl flex flex-col items-center justify-center text-center">
            <h3 className="text-lg font-bold mb-1">⚠️ Extension Conflict Detected</h3>
            <p className="max-w-2xl">
                The "Ant Video Downloader" (or similar) browser extension is blocking this website's database connection.
                <br />
                Please <strong>disable the extension</strong> or use <strong>Incognito Mode</strong> to add projects.
            </p>
            <button
                onClick={() => setBlocked(false)}
                className="mt-3 bg-white text-red-600 px-4 py-1 rounded-full text-sm font-bold hover:bg-gray-100"
            >
                Dismiss
            </button>
        </div>
    );
}
