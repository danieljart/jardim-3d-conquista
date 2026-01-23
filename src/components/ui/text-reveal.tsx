import { FC, ReactNode } from "react";
import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export const TextReveal: FC<TextRevealProps> = ({
    text,
    className,
    delay = 0,
}) => {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={cn("text-4xl font-bold tracking-tight text-white sm:text-6xl", className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word === "3D" || word === "conquistam" ? (
                        <span className="gradient-text">{word}</span>
                    ) : (
                        word
                    )}
                </motion.span>
            ))}
        </motion.h1>
    );
};
