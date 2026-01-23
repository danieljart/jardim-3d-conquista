"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface RoadmapItem {
    quarter: string;
    title: string;
    description: string;
    status?: "done" | "in-progress" | "upcoming";
}

export interface RoadmapCardProps {
    title?: string;
    description?: string;
    items: RoadmapItem[];
}

import { MagicCard } from "@/components/ui/magic-card";

export function RoadmapCard({
    title = "Product Roadmap",
    description = "Upcoming features and releases",
    items,
}: RoadmapCardProps) {
    const hasHeader = !!title || !!description;

    return (
        <MagicCard gradientColor="#6366f1" className="w-full shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1 bg-white/5 backdrop-blur-md border border-white/10 text-left">
            {hasHeader && (
                <CardHeader>
                    <CardTitle className="text-white">{title}</CardTitle>
                    <CardDescription className="text-white/60">{description}</CardDescription>
                </CardHeader>
            )}

            <CardContent className={hasHeader ? "" : "pt-6"}>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 right-0 top-4 h-px bg-white/10 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="relative pt-8 text-center group/item cursor-default"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.15 } }}
                                viewport={{ once: true, margin: "-100px" }}
                                whileHover="hover"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                                    <motion.div
                                        variants={{
                                            hover: { scale: 1.2, transition: { duration: 0.2 } }
                                        }}
                                        className={`h-8 w-8 rounded-full flex items-center justify-center border-4 border-[#111111] transition-all duration-300 ${item.status === "done" || item.status === "in-progress"
                                            ? "bg-indigo-600 group-hover/item:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)]"
                                            : "bg-neutral-700 group-hover/item:bg-neutral-600"
                                            }`}
                                    >
                                        <div className="h-2 w-2 rounded-full bg-white transition-colors duration-300" />
                                    </motion.div>
                                </div>

                                {/* Title + Description */}
                                <h4 className="text-lg font-semibold text-white mb-2 group-hover/item:text-indigo-400 transition-colors duration-300">{item.title}</h4>
                                <p className="text-sm text-white/60 leading-relaxed group-hover/item:text-white/90 transition-colors duration-300">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </MagicCard>
    );
}
