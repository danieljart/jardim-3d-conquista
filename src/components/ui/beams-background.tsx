"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface BeamsBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    intensity?: "subtle" | "medium" | "strong";
}

interface Beam {
    x: number;
    y: number; // Page-space coordinate
    width: number;
    length: number;
    angle: number;
    speed: number;
    opacity: number;
    hue: number;
    pulse: number;
    pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
    const angle = -35 + Math.random() * 10;
    return {
        x: Math.random() * width * 1.5 - width * 0.25,
        y: Math.random() * height,
        width: 60 + Math.random() * 120,
        length: Math.max(window.innerHeight, 1500),
        angle: angle,
        speed: 0.5 + Math.random() * 0.8, // Faster movement
        opacity: 0.15 + Math.random() * 0.15,
        hue: 260 + Math.random() * 40,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02, // Slightly faster pulse
    };
}

export function BeamsBackground({
    className,
    children,
    intensity = "strong",
}: BeamsBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const beamsRef = useRef<Beam[]>([]);
    const animationFrameRef = useRef<number>(0);
    const scrollYRef = useRef(0);

    const opacityMap = {
        subtle: 0.3,
        medium: 0.6,
        strong: 0.9,
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const beamCount = 30;
            // Only need to cover the viewport now
            beamsRef.current = Array.from({ length: beamCount }, () =>
                createBeam(canvas.width, canvas.height)
            );
        };

        updateCanvasSize();
        window.addEventListener("resize", updateCanvasSize);

        function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
            ctx.save();
            ctx.translate(beam.x, beam.y);
            ctx.rotate((beam.angle * Math.PI) / 180);

            const pulsingOpacity =
                beam.opacity *
                (0.8 + Math.sin(beam.pulse) * 0.2) *
                opacityMap[intensity];

            const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);
            gradient.addColorStop(0, `hsla(${beam.hue}, 70%, 65%, 0)`);
            gradient.addColorStop(0.3, `hsla(${beam.hue}, 80%, 70%, ${pulsingOpacity * 0.4})`);
            gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 75%, ${pulsingOpacity})`);
            gradient.addColorStop(0.7, `hsla(${beam.hue}, 80%, 70%, ${pulsingOpacity * 0.4})`);
            gradient.addColorStop(1, `hsla(${beam.hue}, 70%, 65%, 0)`);

            ctx.fillStyle = gradient;
            ctx.globalCompositeOperation = "screen";
            ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
            ctx.restore();
        }

        function animate() {
            if (!canvas || !ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            beamsRef.current.forEach((beam) => {
                beam.y -= beam.speed;
                beam.pulse += beam.pulseSpeed;

                // Loop within viewport space + buffer
                const buffer = 1500;
                if (beam.y + beam.length < -buffer) {
                    beam.y = canvas.height + buffer;
                }

                drawBeam(ctx, beam);
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", updateCanvasSize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [intensity]);

    return (
        <div
            className={cn(
                "fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-[#0F0716]",
                className
            )}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-40"
                style={{ filter: "blur(30px)" }}
            />
            {/* Global depth factor with purple tint */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,7,26,0)_0%,rgba(15,7,26,0.7)_100%)]" />
            
            {children}
        </div>
    );
}

