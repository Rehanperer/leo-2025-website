"use client";

import { motion, Variants } from "framer-motion";
import {
    Users, Heart, Lightbulb, Globe, GraduationCap,
    HandHeart, Palette, Monitor, Star
} from "lucide-react";

const activities = [
    {
        icon: Users,
        title: "Leadership Development",
        desc: "Empowering young leaders through practical experience and mentorship programs."
    },
    {
        icon: Heart,
        title: "Community Service",
        desc: "Engaging in meaningful community service projects to address local needs."
    },
    {
        icon: Lightbulb,
        title: "Skill Building",
        desc: "Providing hands-on experience in management, planning, and teamwork."
    },
    {
        icon: Globe,
        title: "Environmental Projects",
        desc: "Leading conservation initiatives to protect our planet for future generations."
    },
    {
        icon: GraduationCap,
        title: "Educational Support",
        desc: "Supporting educational initiatives and providing learning opportunities."
    },
    {
        icon: HandHeart,
        title: "Social Impact",
        desc: "Creating opportunities for personal growth and fostering connections."
    },
    {
        icon: Palette,
        title: "Creativity",
        desc: "Fostering creative thinking and artistic expression through innovative projects."
    },
    {
        icon: Monitor,
        title: "Innovation & Technology",
        desc: "Embracing cutting-edge technology to address modern challenges."
    },
    {
        icon: Star,
        title: "Excellence",
        desc: "Pursuing excellence in all endeavors through dedication and high standards."
    }
];

export function WhatWeDo() {
    const cardVariants: Variants = {
        offscreen: (index: number) => ({
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0
        }),
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section id="what-we-do" className="py-24 bg-brand-dark">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-white"
                >
                    What We <span className="text-brand-cyan">Do</span>?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false, amount: 0.3 }}
                            className="p-6 rounded-2xl bg-card-bg border border-card-border hover:border-brand-cyan/50 transition-colors group"
                        >
                            <item.icon className="w-10 h-10 mb-4 text-brand-green group-hover:text-brand-cyan transition-colors" />
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
