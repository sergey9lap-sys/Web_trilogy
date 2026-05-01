"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type SceneRevealProps = {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
};

export function SceneReveal({
  children,
  className,
  threshold = 0.3,
}: SceneRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div className={clsx("scene-reveal", isVisible && "is-visible", className)} ref={ref}>
      {children}
    </div>
  );
}
