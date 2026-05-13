import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";

export const metadata: Metadata = {
  title: "Спасибо за регистрацию | Трилогия запуска",
  description:
    "Страница подтверждения регистрации на практикум Трилогия запуска.",
};

export default function ThanksMasshtabirovaniePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-cacao text-bone">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_76%_22%,rgba(179,46,51,0.24),transparent_24rem),radial-gradient(circle_at_12%_8%,rgba(205,159,101,0.16),transparent_24rem),linear-gradient(125deg,#240808_0%,#120404_54%,#0b0808_100%)] py-10 sm:py-14">
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

          <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-4xl flex-col items-center justify-center pt-20 text-center">
            <p className="font-display text-3xl leading-none text-brass sm:text-4xl">
              Регистрация прошла успешно!
            </p>

            <div className="mt-8 grid w-full justify-items-center gap-7">
              <section className="grid justify-items-center gap-5">
                <h1 className="max-w-3xl text-2xl font-bold uppercase leading-9 text-bone sm:text-3xl sm:leading-10">
                  Вам доступна лекция в записи 1 дня практикума
                  <br />
                  «Продукт»
                  <br />
                  Вы можете посмотреть ее тут:
                </h1>
                <ButtonLink
                  className="min-h-16 w-full min-w-0 max-w-[28rem] px-8 uppercase sm:w-[28rem]"
                  href="https://agkedu.getcourse.ru/zapusk_produkt_rec"
                  target="_blank"
                  rel="noreferrer"
                  variant="light"
                >
                  Смотреть запись 1 дня
                </ButtonLink>
              </section>

              <section className="grid justify-items-center gap-5">
                <h2 className="max-w-3xl text-2xl font-bold uppercase leading-9 text-bone sm:text-3xl sm:leading-10">
                  Вы можете посмотреть запись 2 дня эфира. Тема:
                  <br />
                  «Продажи»
                </h2>
                <ButtonLink
                  className="min-h-16 w-full min-w-0 max-w-[28rem] px-8 uppercase sm:w-[28rem]"
                  href="https://agkedu.getcourse.ru/zapusk_prodazhi_rec"
                  target="_blank"
                  rel="noreferrer"
                  variant="light"
                >
                  Смотреть запись 2 дня
                </ButtonLink>
              </section>

              <section className="grid justify-items-center gap-5">
                <h2 className="max-w-3xl text-2xl font-bold uppercase leading-9 text-bone sm:text-3xl sm:leading-10">
                  Чат практикума и все общение происходит тут:
                </h2>
                <ButtonLink
                  className="min-h-16 w-full min-w-0 max-w-[22rem] px-8 uppercase sm:w-[22rem]"
                  href="https://t.me/joinchat/JwOyZSefiKQ2NjBi"
                  target="_blank"
                  rel="noreferrer"
                  variant="light"
                >
                  Попасть в чат
                </ButtonLink>
              </section>
            </div>

            <p className="mt-8 max-w-4xl text-2xl font-bold uppercase leading-9 text-bone sm:text-3xl sm:leading-10">
              Расписание вебинаров и ссылка на трансляции будет
              <br className="hidden sm:block" />
              продублирована вам на электронную почту
              <br className="hidden sm:block" />
              и продублирована в чат практикума
            </p>

            <p className="mt-8 max-w-4xl text-2xl font-bold uppercase leading-9 text-bone sm:text-3xl sm:leading-10">
              По всем вопросам обращайтесь в службу заботы
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-2xl font-bold uppercase text-bone sm:text-4xl">
              <a
                className="transition hover:text-brass"
                href="https://vk.com/agkclub"
                target="_blank"
                rel="noreferrer"
              >
                VK
              </a>
              <a
                className="transition hover:text-brass"
                href="https://t.me/joinchat/JwOyZSefiKQ2NjBi"
                target="_blank"
                rel="noreferrer"
              >
                TG
              </a>
              <a
                className="transition hover:text-brass"
                href="https://max.ru/"
                target="_blank"
                rel="noreferrer"
              >
                MAX
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
