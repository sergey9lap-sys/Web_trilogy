import { ActCard } from "@/components/act-card";
import { ButtonLink } from "@/components/button-link";
import { CinematicResults } from "@/components/cinematic-results";
import { FaqItem } from "@/components/faq-item";
import { GetCourseEmbedPlaceholder } from "@/components/get-course-placeholder";
import { LightLeak } from "@/components/light-leak";
import { RegistrationPopup } from "@/components/registration-popup";
import { Reveal } from "@/components/reveal";
import { ReviewsSlider } from "@/components/reviews-slider";
import { SceneReveal } from "@/components/scene-reveal";
import { SectionHeading } from "@/components/section-heading";
import { audience, care, faq, footer, program, results, speaker, workflow } from "@/lib/content";

const audienceImages = [
  "/background/мини-блок эксперт.jpg",
  "/background/мини-блок продюсер.jpg",
  "/background/мини-блок руководитель онлайн школы.jpg",
];

const programImages = [
  "/background/блок продукт.jpg",
  "/background/блок продажи.jpg",
  "/background/блок масштабирование.jpg",
];

const reviewImages = [
  "/отзывы/IMAGE 2026-05-10 14:40:22.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:26.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:29.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:31.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:32.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:34.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:37.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:39.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:41.jpg",
  "/отзывы/IMAGE 2026-05-10 14:40:42.jpg",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_76%_26%,rgba(110,21,26,0.26),transparent_20rem),radial-gradient(circle_at_15%_8%,rgba(110,21,26,0.48),transparent_28rem),linear-gradient(115deg,#120404_0%,#240808_44%,#0b0808_100%)] lg:h-[840px] lg:max-h-[900px]">
        <div className="absolute inset-0 z-0">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-y-0 right-[-34%] h-full w-[118%] translate-y-16 object-cover object-[82%_62%] opacity-[0.52] sm:right-[-12%] sm:w-[92%] sm:opacity-[0.78] lg:right-[-4%] lg:w-[76%] lg:translate-y-12 lg:object-[76%_58%] lg:opacity-[0.92]"
            src="/background/первый блок.jpeg?v=1"
          />
          <div className="absolute inset-0 bg-[rgba(15,3,5,0.58)] lg:bg-[rgba(15,3,5,0.44)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,3,6,1)_0%,rgba(20,3,6,0.98)_38%,rgba(20,3,6,0.78)_58%,rgba(20,3,6,0.38)_78%,rgba(20,3,6,0.1)_100%)] lg:bg-[linear-gradient(to_right,rgba(20,3,6,1)_0%,rgba(20,3,6,1)_24%,rgba(20,3,6,0.96)_34%,rgba(20,3,6,0.84)_44%,rgba(20,3,6,0.62)_56%,rgba(20,3,6,0.34)_70%,rgba(20,3,6,0.1)_86%,transparent_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,3,6,0.98)_0%,rgba(20,3,6,0.8)_16%,rgba(20,3,6,0.24)_34%,rgba(20,3,6,0.42)_58%,rgba(20,3,6,0.88)_82%,rgba(20,3,6,1)_100%)] lg:bg-[linear-gradient(to_bottom,rgba(20,3,6,0.94)_0%,rgba(20,3,6,0.58)_10%,rgba(20,3,6,0.12)_26%,transparent_44%,transparent_50%,rgba(20,3,6,0.75)_82%,rgba(20,3,6,1)_100%)]" />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.44),transparent_28%,rgba(0,0,0,0.42)),radial-gradient(ellipse_at_center,transparent_46%,rgba(0,0,0,0.58)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 z-0 h-44 bg-gradient-to-t from-cacao via-cacao/78 to-transparent" />
        <div className="section-shell relative z-10 flex min-h-[720px] max-w-7xl flex-col py-5 lg:h-full lg:min-h-0">
          <header className="flex items-center gap-10">
            <img
              alt="Trilogy"
              className="hidden h-12 w-auto object-contain sm:block"
              src="/Без фона-2.png"
            />
            <nav className="hidden items-center gap-6 text-sm text-bone/72 lg:flex">
              <a className="transition hover:text-brass" href="#format">
                Формат
              </a>
              <a className="transition hover:text-brass" href="#program">
                Программа
              </a>
              <a className="transition hover:text-brass" href="#reviews">
                Отзывы
              </a>
              <a className="transition hover:text-brass" href="#care">
                Служба заботы
              </a>
            </nav>
          </header>

          <SceneReveal className="flex flex-1 flex-col justify-start gap-7 pb-8 pt-9 lg:gap-8 lg:pt-12">
            <div className="grid items-start gap-7 lg:grid-cols-[0.48fr_0.52fr]">
              <div className="flex h-full flex-col">
                <p className="eyebrow scene-item">Бесплатный практикум</p>
                <h1
                  className="scene-item mt-4 max-w-4xl text-5xl leading-[0.92] text-bone sm:text-6xl lg:text-[5.8rem]"
                  style={{ transitionDelay: "0.18s" }}
                >
                  Запуск 3.0
                </h1>
                <p
                  className="scene-item mt-4 max-w-3xl font-display text-3xl leading-none text-bone sm:text-4xl lg:text-[2.7rem]"
                  style={{ transitionDelay: "0.34s" }}
                >
                  Три дня, чтобы собрать систему, которая работает без вас
                </p>
                <div
                  className="scene-item mt-6 flex flex-col gap-3 sm:flex-row lg:justify-start"
                  style={{ transitionDelay: "0.5s" }}
                >
                  <ButtonLink
                    className="min-h-16 w-full min-w-0 px-8 text-center sm:w-[20rem] lg:w-[23rem]"
                    href="#registration"
                    opensRegistrationPopup
                    variant="light"
                  >
                    Смотреть эфиры
                  </ButtonLink>
                  <ButtonLink
                    className="min-h-16 w-full min-w-0 px-8 text-center sm:w-[17rem] lg:w-[19rem]"
                    href="#program"
                  >
                    Посмотреть программу
                  </ButtonLink>
                </div>
                <p
                  className="scene-item mt-5 max-w-2xl text-base leading-7 text-bone/80"
                  style={{ transitionDelay: "0.66s" }}
                >
                  Перестаньте собирать запуски из кусочков. За три вечера
                  соберёте схему «Продукт → Продажи → Масштаб», которую можно
                  повторять без выгорания.
                </p>
              </div>
              <div aria-hidden="true" className="hidden lg:block" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:max-w-[58rem]">
              {program.map((item, index) => (
                <div
                  className="scene-item min-h-[9.4rem] min-w-0 overflow-hidden rounded-[1.25rem] border border-brass/22 bg-[#240808] p-5 text-bone shadow-[0_18px_56px_rgba(0,0,0,0.32)]"
                  key={item.act}
                  style={{ transitionDelay: `${1.04 + index * 0.16}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone text-sm font-semibold text-bordeaux">
                      {index + 1}
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                      {item.act}
                    </p>
                  </div>
                  <p className="mt-4 min-w-0 break-words font-display text-2xl leading-none text-bone">
                    {item.title}
                  </p>
                  <div className="mt-3 h-px w-3/4 bg-brass/24" />
                  <p className="mt-3 text-sm font-semibold text-bone/82">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </SceneReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-10 text-cacao sm:py-14" id="format">
        <Reveal className="section-shell relative z-10 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="eyebrow">Зачем это нужно</p>
            <h2 className="mt-4 text-4xl leading-[0.98] text-cacao sm:text-5xl">
              Запуск должен работать по системе, а не на вашем личном ресурсе
            </h2>
            <p className="mt-5 text-base leading-7 text-cacao/75 sm:text-lg">
              Когда продукт, продажи и масштабирование живут отдельно, каждый
              запуск приходится собирать заново. На практикуме вы увидите, как
              связать эти части в понятный повторяемый процесс.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Меньше ручного контроля в каждом запуске",
              "Понятная логика продукта и продаж",
              "Команда работает по одному сценарию",
              "Рост без постоянного аврала",
            ].map((item) => (
              <div
                className="premium-hover flex min-h-20 items-center rounded-lg border border-brass/25 bg-[#240808] p-4 text-base font-semibold leading-6 text-bone shadow-cinematic"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-cacao py-10 sm:py-14">
        <div className="section-shell">
          <SceneReveal className="grid gap-6">
            <div className="scene-item">
              <SectionHeading
                eyebrow="Кому это нужно"
                title="Для тех, кто устал держать запуск на себе"
                text="Три роли, которым нужна система вместо запуска на личном ресурсе."
              />
            </div>
            <div className="grid gap-4">
              {audience.map((item, index) => (
                <article
                  className={`premium-hover scene-item scene-item--soft scene-item--glow grid min-h-[22rem] overflow-hidden rounded-[1.25rem] border border-brass/25 shadow-cinematic sm:min-h-[24rem] lg:min-h-0 lg:grid-cols-[45%_55%] ${
                    index === 1 ? "bg-bone" : "bg-[rgba(20,4,6,0.55)]"
                  }`}
                  key={item}
                  style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
                >
                  <div
                    className={`relative min-h-[12rem] overflow-hidden ${
                      index < 2 ? "lg:h-[13.5rem]" : "lg:h-[11rem]"
                    } ${
                      index === 1 ? "lg:order-last" : ""
                    }`}
                  >
                    <img
                      alt=""
                      className="h-full w-full object-cover opacity-[0.84]"
                      src={audienceImages[index]}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,4,6,0.1),rgba(20,4,6,0.62))] lg:bg-[linear-gradient(to_right,rgba(20,4,6,0.12),rgba(20,4,6,0.68))]" />
                    {index === 1 ? (
                      <div className="absolute inset-0 hidden bg-[linear-gradient(to_left,rgba(20,4,6,0.12),rgba(20,4,6,0.72))] lg:block" />
                    ) : null}
                  </div>
                  <div
                    className={`flex min-h-[10rem] flex-col px-5 py-5 sm:px-7 lg:pt-8 ${
                      index < 2 ? "lg:h-[13.5rem]" : "lg:h-[11rem]"
                    } ${
                      index === 1 ? "text-cacao" : "text-bone"
                    }`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brass">
                      {item.split(":")[0]}
                    </p>
                    <p
                      className={`mt-4 font-display text-2xl leading-[1.08] sm:text-3xl lg:text-[1.7rem] ${
                        index === 1 ? "text-cacao" : "text-bone"
                      }`}
                    >
                      <span className="mr-2 text-3xl leading-none text-brass">
                        “
                      </span>
                      {item.slice(item.indexOf("“") + 1, item.lastIndexOf("”"))}
                      <span className="ml-2 text-3xl leading-none text-brass">
                        ”
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="scene-item flex justify-center" style={{ transitionDelay: "0.82s" }}>
              <ButtonLink
                className="!border-bone !bg-bone !text-bordeaux hover:!border-brass hover:!bg-brass hover:!text-cacao"
                href="#program"
                variant="secondary"
              >
                Узнать подробнее
              </ButtonLink>
            </div>
          </SceneReveal>
        </div>
      </section>

      <section className="bg-bone py-10 text-cacao sm:py-14">
        <div className="section-shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl leading-[0.98] sm:text-5xl">
              Что разберём за три дня
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Продукт, который покупают",
              "Продажи без давления и долгих созвонов",
              "Масштаб без работы 24/7",
              "Повторяемая система запуска",
            ].map((item) => (
              <div className="premium-hover flex min-h-20 items-center rounded-lg border border-bordeaux/25 bg-[#240808] p-4 text-base font-semibold leading-6 text-bone shadow-ember" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cacao py-10 sm:py-14">
        <LightLeak
          blur={2}
          className="right-[-18%] top-[-10%] h-[120%] w-[130%] object-cover object-center mix-blend-screen brightness-110 contrast-110 drop-shadow-[0_0_80px_rgba(205,159,101,0.22)] lg:right-[-7%] lg:top-[4%] lg:h-[90%] lg:w-[38%]"
          mask="left"
          opacity={0.38}
          parallaxX={4}
          parallaxY={8}
          src="/background/11 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="scene-item">
              <SectionHeading
                eyebrow="Как будем работать"
                title="От хаоса к повторяемой схеме"
                text="Практикум не про вдохновение на один вечер. Вы разложите запуск на понятные части и увидите, что должно быть настроено до следующего старта."
              />
            </div>
            <p className="scene-item mt-6 text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.16s" }}>
              Цель — чтобы после практикума вы понимали, с чего начать и что перестать делать вручную.
            </p>
          </div>
          <div className="soft-panel rounded-lg p-4 sm:p-5">
            <div className="grid gap-5">
              {workflow.map((item, index) => (
                <div
                  className="scene-item scene-item--left flex gap-4 border-b border-brass/15 pb-5 last:border-0 last:pb-0"
                  key={item}
                  style={{ transitionDelay: `${0.12 + index * 0.13}s` }}
                >
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brass text-sm font-semibold text-cacao">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-bone/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SceneReveal>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-cacao via-bordeaux/40 to-cacao py-10 sm:py-14" id="program">
        <LightLeak
          blur={2}
          className="inset-x-0 top-[-10%] h-[120%] w-full object-cover object-center mix-blend-screen brightness-110 contrast-110"
          mask="both"
          opacity={0.42}
          parallaxY={8}
          src="/background/5 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10">
          <div className="scene-item">
            <SectionHeading
              eyebrow="Программа"
              title="Расписание и темы эфиров"
              text="За три дня разберёте связку «Продукт → Продажи → Масштаб» и увидите, какие шаги помогут запуску работать по понятной системе."
            />
          </div>
          <p className="scene-item mx-auto mt-6 max-w-2xl text-center text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.16s" }}>
            Каждый день — отдельный блок, который собирает запуск в управляемую систему
          </p>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {program.map((item, index) => (
              <div
                className="scene-item scene-item--soft h-full"
                key={item.act}
                style={{ transitionDelay: `${0.28 + index * 0.18}s` }}
              >
                <ActCard {...item} />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <ButtonLink
              className="w-full sm:w-auto sm:min-w-[24rem]"
              href="#registration"
              opensRegistrationPopup
              variant="light"
            >
              Получить доступ к эфирам
            </ButtonLink>
          </div>
        </SceneReveal>
      </section>

      {program.map((item, index) => (
        <section
          className="relative overflow-hidden bg-[#240808] py-8 sm:py-10"
          key={item.act}
        >
          {index > 0 ? (
            <div className="absolute inset-x-0 top-0 z-0 flex items-center justify-center">
              <div className="h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-brass/80 to-transparent shadow-[0_0_26px_rgba(205,159,101,0.42)]" />
              <div className="absolute h-9 w-9 rotate-45 border border-brass/70 bg-cacao shadow-[0_0_42px_rgba(205,159,101,0.44)]" />
            </div>
          ) : null}
          <SceneReveal className="section-shell relative z-10 grid min-w-0 items-center gap-6 lg:grid-cols-[1fr_0.78fr]">
            <div
              className={
                index === 1
                  ? "scene-item scene-item--left relative order-first aspect-[4/3] w-full overflow-hidden lg:order-first"
                  : "scene-item scene-item--right relative order-first aspect-[4/3] w-full overflow-hidden lg:order-last lg:self-end"
              }
              style={{ transitionDelay: "0.12s" }}
            >
              <img
                alt=""
                className="h-full w-full object-cover opacity-[0.94]"
                src={programImages[index]}
              />
              <div className="absolute inset-0 bg-[rgba(20,4,6,0.2)]" />
              <div
                className={
                  index === 1
                    ? "absolute inset-0 bg-[linear-gradient(to_right,#240808_0%,rgba(36,8,8,0.78)_12%,rgba(36,8,8,0.18)_30%,transparent_48%,rgba(36,8,8,0.18)_68%,rgba(36,8,8,0.78)_88%,#240808_100%)]"
                    : "absolute inset-0 bg-[linear-gradient(to_left,#240808_0%,rgba(36,8,8,0.78)_12%,rgba(36,8,8,0.18)_30%,transparent_48%,rgba(36,8,8,0.18)_68%,rgba(36,8,8,0.78)_88%,#240808_100%)]"
                }
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#240808_0%,rgba(36,8,8,0.58)_11%,rgba(36,8,8,0.12)_26%,transparent_44%,transparent_58%,rgba(36,8,8,0.32)_78%,#240808_100%)]" />
            </div>
            <div className={index === 1 ? "min-w-0 lg:order-last" : "min-w-0 lg:order-first"}>
              <p className="eyebrow scene-item">
                {item.act} · {item.date}
              </p>
              <h2
                className="scene-item mt-3 max-w-full break-words text-4xl leading-[0.96] text-bone sm:text-5xl lg:whitespace-nowrap"
                style={{ transitionDelay: "0.2s" }}
              >
                {item.title}
              </h2>
              <p
                className="scene-item mt-5 text-base leading-7 text-bone/72"
                style={{ transitionDelay: "0.32s" }}
              >
                {item.text}
              </p>
              <div className="mt-5 grid min-w-0 gap-3 sm:grid-cols-2">
                {item.points.map((point, pointIndex) => (
                  <div
                    className={
                      index === 1
                        ? "premium-hover scene-item scene-item--soft w-full min-w-0 overflow-hidden break-words rounded-lg border border-transparent bg-[#f0e6cb] p-4 text-sm leading-6 text-[#3a0d12] shadow-[0_14px_34px_rgba(0,0,0,0.22)]"
                        : "premium-hover scene-item scene-item--soft w-full min-w-0 overflow-hidden break-words rounded-lg border border-brass/20 bg-[linear-gradient(145deg,#3a0d12_0%,#2a0b0f_48%,#180406_100%)] p-4 text-sm leading-6 text-bone shadow-[inset_0_1px_0_rgba(245,210,150,0.08),0_0_28px_rgba(205,159,101,0.08),0_18px_46px_rgba(0,0,0,0.24)]"
                    }
                    key={point}
                    style={{ transitionDelay: `${0.42 + pointIndex * 0.14}s` }}
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </SceneReveal>
          {index === 2 ? (
            <div className="section-shell relative z-10 mt-6 flex justify-center">
              <ButtonLink
                className="w-full sm:w-auto sm:min-w-[24rem]"
                href="#registration"
                opensRegistrationPopup
                variant="light"
              >
                Получить доступ к эфирам
              </ButtonLink>
            </div>
          ) : null}
        </section>
      ))}

      <CinematicResults items={results} />

      <section className="relative overflow-hidden bg-cinema-radial py-10 sm:py-14" id="registration">
        <LightLeak
          blur={2}
          className="left-[-15%] top-[-16%] h-[132%] w-[130%] object-cover object-center lg:inset-x-0 lg:top-[-18%] lg:mx-auto lg:h-[138%] lg:w-[82%]"
          mask="center"
          opacity={0.2}
          parallaxX={0}
          parallaxY={0}
          src="/background/14 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <p className="eyebrow scene-item">Регистрация</p>
            <h2 className="scene-item mt-3 max-w-3xl text-4xl leading-[0.96] text-bone sm:text-5xl" style={{ transitionDelay: "0.12s" }}>
              Регистрируйтесь и смотрите лекции в записи
            </h2>
            <p className="scene-item mt-5 max-w-2xl text-lg leading-8 text-bone/76" style={{ transitionDelay: "0.28s" }}>
              Выполняйте задания челленджа и собирайте систему запуска в своём темпе.
            </p>
            <p className="scene-item mt-5 max-w-2xl text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.4s" }}>
              Доступ открыт на 72 часа.
            </p>
          </div>
          <div className="scene-item scene-item--right" style={{ transitionDelay: "0.55s" }}>
            <GetCourseEmbedPlaceholder />
          </div>
        </SceneReveal>
      </section>

      <ReviewsSlider images={reviewImages} />

      <section className="bg-bone py-10 text-cacao sm:py-14" id="speaker">
        <div className="section-shell grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              {speaker.badge}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[0.96] sm:text-5xl">
              Александра Горева-Куртышева
            </h2>
            <div className="mt-5 rounded-lg bg-cacao p-5 text-bone shadow-cinematic lg:min-h-[31.5rem]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                {speaker.role}
              </p>
              <div className="mt-5 grid gap-3">
                {speaker.highlights.map((item) => (
                  <div
                    className="rounded-md border border-brass/18 bg-bone/6 p-4 text-sm leading-6 text-bone/78"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[20rem] lg:mt-[9.1rem] lg:h-[31.5rem] lg:max-w-[22rem]">
            <div className="absolute inset-x-7 bottom-2 h-24 rounded-full bg-bordeaux/35 blur-3xl" />
            <img
              alt={speaker.imageAlt}
              className="relative aspect-[4/5] w-full rounded-lg border border-bordeaux/20 object-cover object-top shadow-cinematic lg:h-full lg:aspect-auto"
              src={speaker.imageSrc}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cacao py-10 sm:py-14">
        <LightLeak
          blur={2}
          className="left-[-18%] top-[28%] h-[102vw] w-[136vw] object-contain object-center lg:left-auto lg:right-[-6%] lg:top-[-40%] lg:h-[138%] lg:w-[82%] lg:object-cover"
          mask="center"
          opacity={0.2}
          parallaxX={0}
          parallaxY={0}
          src="/background/13 блок.jpg"
        />
        <Reveal className="section-shell relative z-10">
          <SectionHeading
            eyebrow="Вопросы"
            title="Коротко о важном"
          />
          <div className="mt-5">
            {faq.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <ButtonLink href="#registration" variant="light">
              Принять участие
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="bg-cacao py-10 sm:py-14" id="care">
        <div className="section-shell grid items-center gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="soft-panel rounded-lg p-5 sm:p-6">
            <p className="eyebrow">{care.badge}</p>
            <h2 className="mt-3 text-3xl leading-[0.96] text-bone sm:text-4xl">
              {care.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bone/76">
              {care.description}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-bone shadow-ember transition hover:bg-carmine"
                href={footer.telegramUrl}
                rel="noreferrer"
                target="_blank"
              >
                Написать в Телеграм
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-bone shadow-ember transition hover:bg-carmine"
                href={footer.vkUrl}
              >
                Написать ВКонтакте
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-bone shadow-ember transition hover:bg-carmine"
                href={footer.maxUrl}
                rel="noreferrer"
                target="_blank"
              >
                Написать в Макс
              </a>
            </div>
            <p className="mt-6 text-sm leading-6 text-bone/66">
              {care.note}{" "}
              <a className="text-brass" href={`mailto:${footer.email}`}>
                {footer.email}
              </a>
            </p>
          </div>
          <div className="mx-auto w-full max-w-[12rem] rounded-[1.25rem] border border-brass/25 bg-bone/10 p-3 shadow-cinematic">
            <div className="rounded-[1.35rem] bg-bone p-3">
              <img
                alt={care.imageAlt}
                className="w-full rounded-[1rem] shadow-ember"
                src={care.imageSrc}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-cacao pb-8 text-bone">
        <div className="section-shell">
          <div className="rounded-lg border border-brass/20 bg-gradient-to-br from-bordeaux via-cacao to-obsidian p-5 shadow-cinematic sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[1.35fr_0.75fr_1fr]">
              <div>
                <p className="font-display text-3xl">Запуск 3.0</p>
                <p className="mt-4 max-w-md text-sm leading-6 text-bone/72">
                  Бесплатный практикум о том, как собрать систему запуска:
                  продукт, продажи и масштабирование.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    className="rounded-md bg-bone px-4 py-3 text-sm font-semibold text-cacao transition hover:bg-brass"
                    href={footer.telegramUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Телеграм
                  </a>
                  <a
                    className="rounded-md border border-brass/50 px-4 py-3 text-sm font-semibold text-bone transition hover:bg-brass/10"
                    href={footer.vkUrl}
                  >
                    ВКонтакте
                  </a>
                  <a
                    className="rounded-md border border-brass/50 px-4 py-3 text-sm font-semibold text-bone transition hover:bg-brass/10"
                    href={footer.maxUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Макс
                  </a>
                </div>
                <p className="mt-6 text-sm text-bone/70">
                  Ваш личный менеджер: на связи в Телеграм, ВКонтакте и Макс
                </p>
                <a
                  className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md border border-brass/50 px-4 py-2 text-sm font-semibold text-bone transition hover:bg-brass/10"
                  href={footer.developerUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Разработка сайтов
                </a>
                <div className="mt-4 grid gap-2 text-sm">
                  <a className="text-brass" href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}>
                    {footer.phone}
                  </a>
                  <a className="text-brass" href={`mailto:${footer.email}`}>
                    {footer.email}
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-body text-base font-bold text-bone">
                  Навигация
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-bone/72">
                  <a className="transition hover:text-brass" href="#format">
                    Формат
                  </a>
                  <a className="transition hover:text-brass" href="#program">
                    Программа
                  </a>
                  <a className="transition hover:text-brass" href="#reviews">
                    Отзывы
                  </a>
                  <a className="transition hover:text-brass" href="#speaker">
                    Эксперт
                  </a>
                  <a
                    className="transition hover:text-brass"
                    href="#registration"
                  >
                    Регистрация
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-body text-base font-bold text-bone">
                  Контакты
                </h3>
                <div className="mt-5 grid gap-2 text-sm leading-6 text-bone/72">
                  <p>{footer.organizerLabel}</p>
                  {footer.organizerName.map((item) => (
                    <p className="font-semibold text-bone" key={item}>
                      {item}
                    </p>
                  ))}
                  <p>ИНН {footer.inn}</p>
                  <p>{footer.bank}</p>
                  <p>БИК: {footer.bik}</p>
                  <p>Номер счета: {footer.account}</p>
                  <p>Корр.счет: {footer.corrAccount}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 border-t border-brass/18 pt-5 text-sm text-bone/60 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Запуск 3.0. Все права защищены.</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a href={`tel:${footer.phone.replace(/[^+\d]/g, "")}`}>
                  {footer.phone}
                </a>
                <a
                  href={footer.privacyPolicyUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Политика конфиденциальности
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <RegistrationPopup />
    </main>
  );
}
