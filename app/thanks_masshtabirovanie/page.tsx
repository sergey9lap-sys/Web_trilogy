import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Спасибо за регистрацию | Трилогия запуска",
  description:
    "Страница подтверждения регистрации на практикум Трилогия запуска.",
};

const nextSteps = [
  "Посмотрите рекомендованный материал перед эфиром",
  "Вступите в Telegram-чат участников",
  "Следите за сообщениями от команды практикума",
];

export default function ThanksMasshtabirovaniePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cacao text-bone">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_76%_22%,rgba(179,46,51,0.24),transparent_24rem),radial-gradient(circle_at_12%_8%,rgba(205,159,101,0.16),transparent_24rem),linear-gradient(125deg,#240808_0%,#120404_54%,#0b0808_100%)] py-8 sm:py-12">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-[-42%] h-full w-[130%] object-cover object-[76%_52%] opacity-35 sm:right-[-18%] sm:w-[96%] sm:opacity-50 lg:right-[-6%] lg:w-[70%] lg:opacity-65"
            src="/background/%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9%20%D0%B1%D0%BB%D0%BE%D0%BA.jpeg"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,8,8,1)_0%,rgba(36,8,8,0.96)_36%,rgba(36,8,8,0.72)_60%,rgba(36,8,8,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,rgba(0,0,0,0.56)_100%)]" />
        </div>

        <div className="section-shell relative z-10">
          <header className="absolute left-5 top-5 sm:left-6 lg:left-8">
            <a aria-label="Трилогия запуска" href="https://trilogy.agkedu.com/">
              <img
                alt="Trilogy"
                className="h-11 w-auto object-contain sm:h-12"
                src="/%D0%91%D0%B5%D0%B7%20%D1%84%D0%BE%D0%BD%D0%B0-2.png"
              />
            </a>
          </header>

          <div className="grid min-h-[calc(100vh-6rem)] items-center gap-10 pt-20 lg:grid-cols-[0.9fr_0.65fr] lg:pt-12">
            <div className="max-w-3xl">
              <p className="eyebrow">Регистрация прошла успешно</p>
              <h1 className="mt-5 text-5xl leading-[0.92] text-bone sm:text-7xl lg:text-[5.8rem]">
                Спасибо за регистрацию
              </h1>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-brass sm:text-2xl">
                Вы внутри практикума «Запуск 3.0». Осталось сделать два шага,
                чтобы не потерять материалы и напоминания.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink
                  className="min-h-16 w-full min-w-0 px-8 sm:w-auto"
                  href="https://agkedu.getcourse.ru/zapusk_produkt_rec"
                  target="_blank"
                  rel="noreferrer"
                  variant="light"
                >
                  Смотреть материал
                </ButtonLink>
                <ButtonLink
                  className="min-h-16 w-full min-w-0 px-8 sm:w-auto"
                  href="https://t.me/joinchat/JwOyZSefiKQ2NjBi"
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                >
                  Попасть в чат
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-lg border border-brass/24 bg-[#160506]/78 p-5 shadow-cinematic backdrop-blur sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brass">
                Что дальше
              </p>
              <div className="mt-5 grid gap-4">
                {nextSteps.map((step, index) => (
                  <div
                    className="grid grid-cols-[2.75rem_1fr] items-center gap-4 rounded-md border border-brass/16 bg-bone/[0.04] p-4"
                    key={step}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bone text-sm font-semibold text-bordeaux">
                      {index + 1}
                    </span>
                    <p className="text-base font-semibold leading-6 text-bone/88">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
