import { useMemo } from "react";
import { motion } from "framer-motion";

export function FadeText({
    direction = "up",
    className,
    framerProps = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { type: "spring" } },
    },
    text,
    delay = 0,
}: {
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    framerProps?: {
        hidden: { opacity: number; x?: number; y?: number };
        show: { opacity: number; x?: number; y?: number; transition?: any };
        [key: string]: any;
    };
    text: React.ReactNode;
    delay?: number;
}) {
    const directionOffset = useMemo(() => {
        const map = { up: 10, down: -10, left: -10, right: 10 };
        return map[direction];
    }, [direction]);

    const axis = direction === "up" || direction === "down" ? "y" : "x";

    const FADE_ANIMATION_VARIANTS = useMemo(() => {
        const { hidden, show, ...rest } = framerProps as {
            [name: string]: any;
        };

        return {
            ...rest,
            hidden: {
                ...(hidden ?? {}),
                opacity: hidden?.opacity ?? 0,
                [axis]: hidden?.[axis] ?? directionOffset,
            },
            show: {
                ...(show ?? {}),
                opacity: show?.opacity ?? 1,
                [axis]: show?.[axis] ?? 0,
                transition: {
                    ...show?.transition,
                    delay: delay
                }
            },
        };
    }, [directionOffset, axis, framerProps, delay]);

    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={FADE_ANIMATION_VARIANTS}
            className={className}
        >
            {text}
        </motion.div>
    );
}
