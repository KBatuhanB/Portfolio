"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Desteklenen renk temaları
 * Her sayfa için farklı renk paleti kullanılabilir
 */
type ColorTheme = 'blue' | 'purple' | 'green' | 'yellow' | 'pink';

/**
 * Renk temasına göre Tailwind class'larını döndürür
 * JIT compiler için tam class isimleri kullanılıyor
 */
const getColorClasses = (theme: ColorTheme) => {
  const colorMap = {
    blue: {
      beam: 'from-blue-500 via-blue-400 to-transparent',
      explosionGlow: 'via-blue-500',
      particles: 'from-blue-400 to-blue-600',
    },
    purple: {
      beam: 'from-purple-500 via-purple-400 to-transparent',
      explosionGlow: 'via-purple-500',
      particles: 'from-purple-400 to-purple-600',
    },
    green: {
      beam: 'from-green-500 via-green-400 to-transparent',
      explosionGlow: 'via-green-500',
      particles: 'from-green-400 to-green-600',
    },
    yellow: {
      beam: 'from-yellow-500 via-yellow-400 to-transparent',
      explosionGlow: 'via-yellow-500',
      particles: 'from-yellow-400 to-yellow-600',
    },
    pink: {
      beam: 'from-pink-500 via-pink-400 to-transparent',
      explosionGlow: 'via-pink-500',
      particles: 'from-pink-400 to-pink-600',
    },
  };
  
  return colorMap[theme];
};

export const BackgroundBeamsWithCollision = ({
  children,
  className,
  colorTheme = 'blue',
}: {
  children: React.ReactNode;
  className?: string;
  /** Sayfanın renk teması - varsayılan: 'blue' */
  colorTheme?: ColorTheme;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 7,
      repeatDelay: 3,
      delay: 2,
    },
    {
      initialX: 600,
      translateX: 600,
      duration: 3,
      repeatDelay: 3,
      delay: 4,
    },
    {
      initialX: 100,
      translateX: 100,
      duration: 7,
      repeatDelay: 7,
      className: "h-6",
    },
    {
      initialX: 400,
      translateX: 400,
      duration: 5,
      repeatDelay: 14,
      delay: 4,
    },
    {
      initialX: 800,
      translateX: 800,
      duration: 11,
      repeatDelay: 2,
      className: "h-20",
    },
    {
      initialX: 1000,
      translateX: 1000,
      duration: 4,
      repeatDelay: 2,
      className: "h-12",
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "min-h-screen bg-black relative w-full overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={index}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
          colorTheme={colorTheme}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    colorTheme: ColorTheme;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {}, colorTheme }) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState({
    detected: false,
    coordinates: { x: 0, y: 0 },
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  // Renk temasına göre class'ları al
  const colorClasses = getColorClasses(colorTheme);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates.x > 0) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: { x: 0, y: 0 } });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t",
          colorClasses.beam,
          beamOptions.className
        )}
      />
      {collision.detected && (
        <Explosion
          key={`${collision.coordinates.x}-${collision.coordinates.y}`}
          className=""
          style={{
            left: `${collision.coordinates.x}px`,
            top: `${collision.coordinates.y}px`,
            transform: "translate(-50%, -50%)",
          }}
          colorClasses={colorClasses}
        />
      )}
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ 
  colorClasses,
  ...props 
}: React.HTMLProps<HTMLDivElement> & { 
  colorClasses: ReturnType<typeof getColorClasses> 
}) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={cn(
          "absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent to-transparent blur-sm",
          colorClasses.explosionGlow
        )}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className={cn(
            "absolute h-1 w-1 rounded-full bg-gradient-to-b",
            colorClasses.particles
          )}
        />
      ))}
    </div>
  );
};

const motion = require("framer-motion").motion;
