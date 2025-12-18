"use client";

import { InstagramEmbed } from "react-social-media-embed";

interface InstagramEmbedWrapperProps {
    url: string;
}

export const InstagramEmbedWrapper = ({ url }: InstagramEmbedWrapperProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url={url} width={328} />
        </div>
    );
};
