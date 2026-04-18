"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { clsx } from "clsx";

type LightLeakProps = {
  src: string;
  className: string;
  mask?: "right" | "left" | "both" | "center";
  opacity: number;
  blur: number;
  parallaxX?: number;
  parallaxY?: number;
  baseTransform?: string;
  delay?: number;
};

const masks = {
  right:
    "[mask-image:linear-gradient(90deg,black_0%,rgba(0,0,0,0.7)_42%,transparent_100%)]",
  left:
    "[mask-image:linear-gradient(270deg,black_0%,rgba(0,0,0,0.7)_42%,transparent_100%)]",
  both:
    "[mask-image:linear-gradient(90deg,transparent_0%,black_20%,black_80%,transparent_100%)]",
  center:
    "[mask-image:radial-gradient(circle_at_center,black_0%,rgba(0,0,0,0.75)_38%,transparent_78%)]",
};

export function LightLeak({
  src,
  className,
  mask = "center",
  opacity,
  blur,
  parallaxX = 0,
  parallaxY = 8,
  baseTransform = "",
  delay = 120,
}: LightLeakProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (!element || (!parallaxX && !parallaxY)) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = Math.min(
        1,
        Math.max(0, (viewport - rect.top) / (viewport + rect.height)),
      );
      setOffset({
        x: (progress - 0.5) * parallaxX,
        y: (progress - 0.5) * parallaxY,
      });
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [parallaxX, parallaxY]);

  return (
    <img
      alt=""
      aria-hidden="true"
      className={clsx(
        "light-leak pointer-events-none absolute z-0 select-none object-cover",
        isReady && "is-visible",
        masks[mask],
        className,
      )}
      ref={ref}
      src={src}
      style={{
        "--light-leak-opacity": opacity,
        "--light-leak-blur": `${blur}px`,
        "--light-leak-delay": `${delay}ms`,
        "--light-leak-transform": `${baseTransform} translate3d(${offset.x}px, ${offset.y}px, 0)`,
      } as CSSProperties}
    />
  );
}
