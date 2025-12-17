"use client";

import { usePathname } from "next/navigation";
import PillNav from "./PillNav";

export function NavBarWrapper() {
    const pathname = usePathname();

    return (
        <PillNav
            logo="/logo.png"
            logoAlt="Leo Club Logo"
            items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Gallery', href: '/gallery' },
                {
                    label: 'EIC Leos',
                    href: '#',
                    items: [
                        { label: 'Team', href: '/#team' },
                        { label: 'Full Team', href: '/team' },
                        { label: 'Club logo', href: '/logo-history' },
                        {
                            label: 'History',
                            href: '#',
                            items: [
                                { label: 'Former Leaders', href: '/history/leaders' },
                                { label: 'Club Awards', href: '/history/awards' },
                                { label: 'Source of inspiration', href: '/history/inspiration' },
                            ]
                        }
                    ]
                },
                { label: 'Newsletter', href: '/newsletter' },
            ]}
            activeHref={pathname}
            baseColor="#050505"
            pillColor="#1a1a1a"
            pillTextColor="#ffffff"
            hoveredPillTextColor="#00ff9d"
            className="container mx-auto mt-4"
        />
    );
}
