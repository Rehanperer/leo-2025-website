"use client";

import { useState, useEffect } from "react";
import { InstagramEmbed } from "react-social-media-embed";

interface InstagramEmbedWrapperProps {
    url: string;
    width?: number | string;
    className?: string;
}

export const InstagramEmbedWrapper = ({ url, width = 328, className }: InstagramEmbedWrapperProps) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <div className={className} style={{ width: width, height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius: 8 }}></div>;
    }

    return (
        <div className={className} style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={url} width={width} />
        </div>
    );
};
