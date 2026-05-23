"use client";

import { useEffect, useRef, useState } from "react";

const widgetId = "8ff3b060af8fc7012110ed0a713d79ad25309228";
const widgetScriptSrc =
  "https://agkedu.getcourse.ru/pl/lite/widget/script?id=1608380";

export function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openPopup = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest(
        "[data-registration-popup]",
      );

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    };

    document.addEventListener("click", openPopup);

    return () => {
      document.removeEventListener("click", openPopup);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    const container = widgetRef.current;

    if (!isOpen || !container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.id = widgetId;
    script.src = widgetScriptSrc;
    script.async = true;
    script.onload = () => {
      if (document.readyState !== "loading") {
        document.dispatchEvent(new Event(`StartWidget${widgetId}`));
      }
    };

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 px-4 py-6 backdrop-blur-sm"
      role="dialog"
    >
      <button
        aria-label="Закрыть форму регистрации"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={() => setIsOpen(false)}
        type="button"
      />
      <div className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-lg border border-brass/35 bg-bone p-5 text-cacao shadow-[0_28px_90px_rgba(0,0,0,0.48)] sm:p-7">
        <button
          aria-label="Закрыть"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-bordeaux/25 text-2xl leading-none text-bordeaux transition hover:border-bordeaux hover:bg-bordeaux hover:text-bone"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          ×
        </button>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
          Регистрация
        </p>
        <h2 className="mt-3 pr-8 text-3xl leading-tight text-cacao">
          Получить доступ к эфирам
        </h2>
        <p className="mt-3 text-sm leading-6 text-cacao/70">
          Заполните форму, и доступ к лекциям в записи откроется сразу.
        </p>
        <div className="mt-5 min-h-[22rem] overflow-hidden rounded-md" ref={widgetRef} />
      </div>
    </div>
  );
}
