"use client";

import { useRef, useState } from "react";

type ReviewsSliderProps = {
  images: string[];
};

export function ReviewsSlider({ images }: ReviewsSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToReview(index: number) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const card = scroller.children[index] as HTMLElement | undefined;

    if (!card) {
      return;
    }

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(index);
  }

  function move(direction: -1 | 1) {
    const nextIndex = (activeIndex + direction + images.length) % images.length;
    scrollToReview(nextIndex);
  }

  return (
    <section className="relative overflow-hidden bg-cacao py-10 text-bone sm:py-14" id="reviews">
      <div className="section-shell">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
              Отзывы
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.98] sm:text-5xl">
              Что говорят участники
            </h2>
            <p className="mt-5 text-base leading-7 text-bone/72 sm:text-lg">
              Собрали живые сообщения от тех, кто уже работал с подходом
              Александры и забирал из хаоса понятную систему.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              aria-label="Предыдущий отзыв"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-brass/35 bg-bone text-2xl leading-none text-bordeaux shadow-ember transition hover:bg-brass"
              onClick={() => move(-1)}
              type="button"
            >
              ‹
            </button>
            <button
              aria-label="Следующий отзыв"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-brass/35 bg-bone text-2xl leading-none text-bordeaux shadow-ember transition hover:bg-brass"
              onClick={() => move(1)}
              type="button"
            >
              ›
            </button>
          </div>
        </div>

        <div
          className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
          ref={scrollerRef}
        >
          {images.map((image, index) => (
            <figure
              className="premium-hover min-w-[72%] snap-center overflow-hidden rounded-lg border border-brass/22 bg-bone p-2.5 shadow-cinematic sm:min-w-[18rem] lg:min-w-[17rem]"
              key={image}
            >
              <img
                alt={`Отзыв участника ${index + 1}`}
                className="h-[22rem] w-full rounded-md object-contain sm:h-[21rem] lg:h-[20rem]"
                loading="lazy"
                src={image}
              />
            </figure>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              aria-label={`Показать отзыв ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                activeIndex === index ? "w-8 bg-brass" : "w-2.5 bg-bone/28"
              }`}
              key={image}
              onClick={() => scrollToReview(index)}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
