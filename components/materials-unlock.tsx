"use client";

import { useState } from "react";
import { program } from "@/lib/content";
import type { Material, MaterialDay } from "@/lib/supabase";

type UnlockState = {
  code: string;
  isLoading: boolean;
  error: string;
  material: Material | null;
};

const dayIds: MaterialDay[] = ["day1", "day2", "day3"];

const initialState: UnlockState = {
  code: "",
  isLoading: false,
  error: "",
  material: null,
};

export function MaterialsUnlock() {
  const [states, setStates] = useState<Record<MaterialDay, UnlockState>>({
    day1: initialState,
    day2: initialState,
    day3: initialState,
  });

  function updateDay(day: MaterialDay, patch: Partial<UnlockState>) {
    setStates((current) => ({
      ...current,
      [day]: {
        ...current[day],
        ...patch,
      },
    }));
  }

  async function unlock(day: MaterialDay) {
    const code = states[day].code.trim();

    if (!code) {
      updateDay(day, { error: "Введите кодовое слово" });
      return;
    }

    updateDay(day, { isLoading: true, error: "" });

    try {
      const response = await fetch("/api/materials/unlock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ day, code }),
      });
      const data = (await response.json()) as
        | { ok: true; material: Material }
        | { ok: false; error: string };

      if (!data.ok) {
        const message =
          data.error === "not_configured"
            ? "Материалы скоро появятся"
            : "Неверное кодовое слово";
        updateDay(day, { error: message, isLoading: false });
        return;
      }

      updateDay(day, {
        material: data.material,
        isLoading: false,
        error: "",
      });
    } catch {
      updateDay(day, {
        error: "Не удалось проверить код. Попробуйте ещё раз.",
        isLoading: false,
      });
    }
  }

  return (
    <section className="section-shell py-14 sm:py-20">
      <div className="grid gap-5 lg:grid-cols-3">
        {program.map((item, index) => {
          const day = dayIds[index];
          const state = states[day];

          return (
            <article className="soft-panel rounded-lg p-5 sm:p-6" key={day}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
                    {item.act}
                  </p>
                  <h2 className="mt-3 text-3xl text-bone">{item.title}</h2>
                </div>
                <span className="flex min-w-[3.75rem] items-center justify-center whitespace-nowrap rounded-full border border-brass/40 px-3 py-1 text-sm text-brass">
                  {item.date}
                </span>
              </div>
              <p className="mt-5 text-sm leading-6 text-bone/70">
                {item.text}
              </p>

              {state.material ? (
                <div className="mt-7 rounded-md border border-brass/30 bg-bone p-5 text-cacao">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux">
                    Материал открыт
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {state.material.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-cacao/75">
                    {state.material.description}
                  </p>
                  <a
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-bordeaux px-4 py-2 text-sm font-semibold text-bone transition hover:bg-carmine"
                    href={state.material.url}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Открыть материал
                  </a>
                </div>
              ) : (
                <div className="mt-7">
                  <label
                    className="text-sm font-semibold text-bone"
                    htmlFor={`code-${day}`}
                  >
                    Кодовое слово
                  </label>
                  <input
                    className="mt-3 min-h-12 w-full rounded-md border border-brass/20 bg-obsidian/50 px-4 text-base text-bone outline-none transition placeholder:text-bone/30 focus:border-brass"
                    disabled={state.isLoading}
                    id={`code-${day}`}
                    onChange={(event) =>
                      updateDay(day, {
                        code: event.target.value,
                        error: "",
                      })
                    }
                    placeholder="Введите код"
                    type="text"
                    value={state.code}
                  />
                  {state.error ? (
                    <p className="mt-3 text-sm text-brass">{state.error}</p>
                  ) : null}
                  <button
                    className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-bone shadow-ember transition hover:bg-carmine disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={state.isLoading}
                    onClick={() => unlock(day)}
                    type="button"
                  >
                    {state.isLoading ? "Проверяем..." : "Открыть материал"}
                  </button>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
