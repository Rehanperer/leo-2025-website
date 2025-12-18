"use client";

import { InstagramEmbed } from "react-social-media-embed";

interface InstagramEmbedWrapperProps {
    url: string;
    width?: number | string;
    className?: string;
}

export const InstagramEmbedWrapper = ({ url, width = 328, className }: InstagramEmbedWrapperProps) => {
    return (
        <div className={className} style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={url} width={width} />
        </div>
    );
};
