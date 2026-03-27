import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPurple, setIsPurple] = useState(false);
  const [hoveredEl, setHoveredEl] = useState<HTMLElement | null>(null);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Offset to center the 32px cursor (16px)
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const interactiveEl = target.closest('a, button, [data-cursor="hover"]') as HTMLElement;
      
      if (interactiveEl) {
        setIsHovering(true);
        
        // Remove class from previous el if it's different
        if (hoveredEl && hoveredEl !== interactiveEl) {
          hoveredEl.classList.remove('cursor-on-purple');
        }
        
        setHoveredEl(interactiveEl);
        
        const color = interactiveEl.getAttribute('data-cursor-color');
        if (color === 'purple') {
          setIsPurple(true);
          interactiveEl.classList.add('cursor-on-purple');
        } else {
          setIsPurple(false);
          interactiveEl.classList.remove('cursor-on-purple');
        }
      } else {
        setIsHovering(false);
        setIsPurple(false);
        if (hoveredEl) {
          hoveredEl.classList.remove('cursor-on-purple');
          setHoveredEl(null);
        }
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      if (hoveredEl) hoveredEl.classList.remove('cursor-on-purple');
    };
  }, [cursorX, cursorY, hoveredEl]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
          
          /* Custom inversion behavior for purple elements */
          html body .cursor-on-purple {
            background-color: #000 !important;
            border-color: #000 !important;
            color: #fff !important;
            transition: background-color 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important;
          }
           html body .cursor-on-purple * {
            color: #fff !important;
            background-color: transparent !important;
          }
        }
      `}} />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 bg-primary hidden md:block mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? (isPurple ? 1.5 : 2.5) : 1,
          borderRadius: isHovering ? "4px" : "50%",
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          mass: 0.5,
          borderRadius: { duration: 0.2 },
          rotate: { duration: 0.5, ease: "circOut" }
        }}
      />
      
      {/* Outer subtle ring for more "dynamic" feel */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 border border-primary/40 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 3.5 : 1.5,
          opacity: isHovering ? 0.2 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 40,
        }}
      />
    </>
  );
}
