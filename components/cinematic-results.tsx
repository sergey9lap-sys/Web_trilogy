"use client";

import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

type CinematicResultsProps = {
  items: string[];
};

export function CinematicResults({ items }: CinematicResultsProps) {
  const ref = useRef<HTMLElement>(null);
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
        threshold: 0.65,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="cinematic-results bg-bone py-20 text-cacao sm:py-28"
      ref={ref}
    >
      <div className="section-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
          Результат прохождения
        </p>
        <div className="mt-4 flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2
            className={clsx(
              "cinematic-results__title font-display text-4xl leading-[0.98] sm:text-5xl lg:whitespace-nowrap lg:text-[3rem]",
              isVisible && "is-visible",
            )}
          >
            Титры не появятся. Начнётся ваш блокбастер
          </h2>
          <div
            aria-hidden="true"
            className={clsx(
              "cinematic-results__signal hidden lg:block",
              isVisible && "is-visible",
            )}
          />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              className={clsx(
                "cinematic-results__card premium-hover rounded-lg border border-bordeaux/25 bg-bordeaux p-5 text-bone shadow-ember",
                isVisible && "is-visible",
              )}
              key={item}
              style={{
                transitionDelay: isVisible ? `${0.85 + index * 0.18}s` : "0s",
              }}
            >
              <p className="font-display text-4xl text-brass">
                {index + 1}
              </p>
              <p className="mt-3 text-sm font-semibold leading-6 text-bone/82">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
