"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const CanvasRevealEffect = ({
    containerClassName,
}: {
    animationSpeed?: number;
    opacities?: number[];
    colors?: number[][];
    containerClassName?: string;
    dotSize?: number;
    showGradient?: boolean;
}) => {
    return (
        <div className={cn("h-full relative bg-white w-full flex items-center justify-center", containerClassName)}>
            <div className="text-black">Canvas Reveal Effect (Mocked)</div>
        </div>
    );
};
