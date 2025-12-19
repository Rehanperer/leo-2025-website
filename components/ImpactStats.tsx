"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Users, Briefcase, Clock, UserCheck } from "lucide-react";

interface ImpactStatsProps {
    stats?: {
        beneficiaries: number;
        projects: number;
        hours: number;
        members: number;
    }
}

export default function ImpactStats({ stats }: ImpactStatsProps) {
    // Determine stats from props, fallback to 0 if undefined (e.g. loading or not yet passed)
    const { beneficiaries = 0, projects = 0, hours = 0, members = 34 } = stats || {};

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax Math:
    // Container Height: 100% (H)
    // Element Height: 160% (1.6H)
    // Initial Top: -30% (-0.3H) -> Centers the 1.6H element somewhat (leaving 0.3H top overhang, 0.3H bottom overhang)
    // Movement: +/- 15% of Element Height = +/- 0.15 * 1.6H = +/- 0.24H
    // Start Pos: -0.3H - 0.24H = -0.54H. Bottom Edge = -0.54H + 1.6H = 1.06H (> 1H, Safe)
    // End Pos:   -0.3H + 0.24H = -0.06H. Top Edge = -0.06H (< 0, Safe)
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const statItems = [
        {
            icon: Users,
            value: beneficiaries.toLocaleString() + "+",
            label: "Lives Impacted",
        },
        {
            icon: Briefcase,
            value: projects.toLocaleString() + "+",
            label: "Projects Completed",
        },
        {
            icon: Clock,
            value: hours.toLocaleString() + "+",
            label: "Volunteer Hours",
        },
        {
            icon: UserCheck,
            value: members.toLocaleString(), // Hardcoded members or passed prop
            label: "Dedicated Members",
        },
    ];

    return (
        <section ref={ref} className="relative py-24 bg-black overflow-hidden flex items-center">
            {/* Background Image with Parallax via Framer Motion */}
            <motion.div
                className="absolute inset-0 z-0 will-change-transform"
                style={{
                    y,
                    height: "160%", // Increased height for safe parallax range
                    top: "-30%"    // Center the overflow
                }}
            >
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/impact-bg.jpg')" }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/85" />
            </motion.div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {statItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4 p-4 bg-brand-cyan/10 rounded-full text-brand-cyan ring-1 ring-brand-cyan/20">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-brand-cyan mb-2">
                                {item.value}
                            </h3>
                            <p className="text-white text-lg font-medium">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
