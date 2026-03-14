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
        <MagicCard gradientColor="rgba(158, 62, 213, 0.2)" className="w-full shadow-2xl hover:shadow-[0_20px_50px_rgba(158,62,213,0.15)] transition-all duration-300 hover:scale-[1.01] bg-white/3 backdrop-blur-[24px] border border-white/10 text-left rounded-[32px] glass-card">
            {hasHeader && (
                <CardHeader>
                    <CardTitle className="text-white">{title}</CardTitle>
                    <CardDescription className="text-white/60">{description}</CardDescription>
                </CardHeader>
            )}

            <CardContent className={hasHeader ? "" : "pt-6"}>
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 right-0 top-4 h-[3px] bg-highlight hidden md:block opacity-60" />

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
                                        className={`h-8 w-8 rounded-full flex items-center justify-center border-4 border-[#0B0714] transition-all duration-300 shadow-xl ${item.status === "done" || item.status === "in-progress"
                                            ? "bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                                            : "bg-[#1A1A1A] border-white/5"
                                            }`}
                                    >
                                        <div className={`h-2 w-2 rounded-full transition-colors duration-300 ${item.status === "done" || item.status === "in-progress"
                                            ? "bg-primary"
                                            : "bg-white/10"
                                            }`} />
                                    </motion.div>
                                </div>

                                {/* Title + Description */}
                                <h4 className="text-[16px] font-semibold text-white mb-2 group-hover/item:text-primary transition-colors duration-300">{item.title}</h4>
                                <p className="text-[13px] text-white/50 leading-[1.5] group-hover/item:text-white/80 transition-colors duration-300">
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
