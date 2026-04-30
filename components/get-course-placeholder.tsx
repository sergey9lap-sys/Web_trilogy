"use client";

import { useEffect, useRef } from "react";

const widgetId = "ddbeed8401e003444f3f06357d6fe54052d9d9eb";
const widgetScale = 0.68;
const widgetVisualWidth = 1.12;
const widgetCropTop = 0.055;
const widgetCropBottom = 0.12;

export function GetCourseEmbedPlaceholder() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    function resizeWidget() {
      const iframe = container?.querySelector("iframe");

      if (!container || !(iframe instanceof HTMLIFrameElement)) {
        return;
      }

      const height = Number.parseFloat(iframe.style.height);

      iframe.style.width = `${(100 * widgetVisualWidth) / widgetScale}%`;
      iframe.style.maxWidth = `${(100 * widgetVisualWidth) / widgetScale}%`;
      iframe.style.marginLeft = `${-((widgetVisualWidth - 1) / 2) * 100}%`;
      iframe.style.marginTop = `${-(height * widgetScale * widgetCropTop)}px`;
      iframe.style.transform = `scale(${widgetScale})`;
      iframe.style.transformOrigin = "top left";

      if (Number.isFinite(height) && height > 0) {
        container.style.height = `${height * widgetScale * (1 - widgetCropTop - widgetCropBottom)}px`;
      }
    }

    const observer = new MutationObserver(resizeWidget);
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.uniqName === widgetId) {
        window.requestAnimationFrame(resizeWidget);
      }
    };

    window.addEventListener("message", handleMessage);

    const script = document.createElement("script");
    script.id = widgetId;
    script.src =
      "https://agkedu.getcourse.ru/pl/lite/widget/script?id=1597125";
    script.async = true;
    script.onload = () => {
      document.dispatchEvent(new Event(`StartWidget${widgetId}`));
    };
    container.appendChild(script);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      id="registration"
      className="soft-panel rounded-lg p-5 sm:p-7"
      aria-label="Регистрация на трилогию"
    >
      <p className="eyebrow">Регистрация</p>
      <h3 className="mt-3 text-3xl leading-tight text-bone">
        Бронируйте место в первом ряду
      </h3>
      <p className="mt-4 text-sm leading-6 text-bone/70">
        Заполните форму — и мы вышлем вам пропуск за кулисы главной премьеры
        сезона: три эфира, три артефакта и система, которая изменит ваше кино.
      </p>
      <div className="mt-6 overflow-hidden rounded-md text-cacao" ref={widgetRef} />
      <p className="mt-5 text-sm font-semibold leading-6 text-brass">
        Разница между “знаю” и “зарабатываю” — это система. Начнём съёмки 11 мая.
      </p>
    </div>
  );
}
