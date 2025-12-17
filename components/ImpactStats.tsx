"use client";

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
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/impact-bg.jpg" // Ensure this image exists in public folder
                    alt="Impact Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay - Adjusted opacity to make image visible but text readable */}
                <div className="absolute inset-0 bg-black/85" />
            </div>

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
