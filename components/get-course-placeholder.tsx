"use client";

import { useEffect, useRef } from "react";

const widgetId = "c8527d418248b93ef62f4d450c2c1390a4e95c29";
const widgetScriptSrc =
  "https://agkedu.getcourse.ru/pl/lite/widget/script?id=1599016";
const widgetCropX = 22;
const widgetCropY = 22;

export function GetCourseEmbedPlaceholder() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container || container.dataset.loaded === "true") {
      return;
    }

    container.dataset.loaded = "true";

    function trimWidgetFrame() {
      const iframe = container?.querySelector("iframe");

      if (!container || !(iframe instanceof HTMLIFrameElement)) {
        return;
      }

      const height = Number.parseFloat(
        iframe.style.height || iframe.getAttribute("height") || "",
      );

      iframe.style.border = "0";
      iframe.style.display = "block";
      iframe.style.marginLeft = `-${widgetCropX}px`;
      iframe.style.marginTop = `-${widgetCropY}px`;
      iframe.style.maxWidth = "none";
      iframe.style.width = `calc(100% + ${widgetCropX * 2}px)`;

      if (Number.isFinite(height) && height > widgetCropY * 2) {
        container.style.height = `${height - widgetCropY * 2}px`;
      }
    }

    const observer = new MutationObserver(trimWidgetFrame);
    observer.observe(container, {
      attributes: true,
      attributeFilter: ["style", "height"],
      childList: true,
      subtree: true,
    });

    const handleMessage = (event: MessageEvent) => {
      if (event.data?.uniqName === widgetId) {
        window.requestAnimationFrame(trimWidgetFrame);
      }
    };

    window.addEventListener("message", handleMessage);

    const script = document.createElement("script");
    script.id = widgetId;
    script.src = widgetScriptSrc;
    script.async = true;
    script.onload = () => {
      document.dispatchEvent(new Event(`StartWidget${widgetId}`));
      window.requestAnimationFrame(trimWidgetFrame);
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
