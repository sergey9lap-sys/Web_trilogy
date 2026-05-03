import { ActCard } from "@/components/act-card";
import { ButtonLink } from "@/components/button-link";
import { CinematicResults } from "@/components/cinematic-results";
import { FaqItem } from "@/components/faq-item";
import { GetCourseEmbedPlaceholder } from "@/components/get-course-placeholder";
import { LightLeak } from "@/components/light-leak";
import { Reveal } from "@/components/reveal";
import { SceneReveal } from "@/components/scene-reveal";
import { SectionHeading } from "@/components/section-heading";
import { audience, care, faq, footer, program, results, speaker } from "@/lib/content";

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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[760px] bg-cinema-radial lg:min-h-[860px]">
        <LightLeak
          blur={2}
          className="left-[-8%] top-[8%] h-[136vw] w-[116%] object-contain object-top lg:left-[-6%] lg:top-[12%] lg:h-[86%] lg:w-[50%] lg:object-cover lg:object-left-center"
          delay={260}
          mask="right"
          opacity={0.36}
          parallaxY={10}
          src="/background/1 блок.jpg"
        />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-cacao to-transparent" />
        <div className="section-shell relative flex min-h-[760px] flex-col py-6 lg:min-h-[860px]">
          <header className="flex items-center justify-between gap-4">
            <p className="font-display text-2xl text-bone">Запуск 3.0</p>
            <nav className="hidden items-center gap-6 text-sm text-bone/72 lg:flex">
              <a className="transition hover:text-brass" href="#format">
                Формат
              </a>
              <a className="transition hover:text-brass" href="#program">
                Эфиры
              </a>
              <a className="transition hover:text-brass" href="#artifacts">
                Артефакты
              </a>
              <a className="transition hover:text-brass" href="#care">
                Служба заботы
              </a>
            </nav>
            <div className="flex items-center gap-2 sm:gap-3">
              <ButtonLink
                className="hidden sm:inline-flex"
                href="/materials"
                variant="light"
              >
                Получить материалы
              </ButtonLink>
              <ButtonLink className="hidden sm:inline-flex" href="#registration">
                Зарегистрироваться
              </ButtonLink>
            </div>
          </header>

          <SceneReveal className="grid flex-1 items-start gap-10 pb-12 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:pt-20">
            <div className="flex h-full flex-col">
              <p className="eyebrow scene-item">Премьера · 11-13 мая</p>
              <h1 className="scene-item mt-5 max-w-4xl text-6xl leading-[0.9] text-bone sm:text-7xl lg:text-8xl" style={{ transitionDelay: "0.18s" }}>
                Запуск 3.0
              </h1>
              <p className="scene-item mt-6 max-w-3xl font-display text-4xl leading-none text-bone sm:text-5xl" style={{ transitionDelay: "0.34s" }}>
                Система, где каждый кадр работает на результат
              </p>
              <p className="scene-item mt-4 max-w-2xl text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.5s" }}>
                Не смотри вебинары как зритель. Стань режиссёром своих запусков.
              </p>
              <div className="scene-item mt-5 sm:hidden" style={{ transitionDelay: "0.58s" }}>
                <ButtonLink className="min-h-14 w-full text-base" href="#registration">
                  Зарегистрироваться
                </ButtonLink>
              </div>
              <p className="scene-item mt-6 max-w-2xl text-xl leading-8 text-bone/80" style={{ transitionDelay: "0.66s" }}>
                Три акта. Три инструмента силы. Вы не просто смотрите — вы
                создаете оружие. В конце трёх дней у вас в руках будет
                полностью собранная система “Продукт → Продажи →
                Масштабирование”.
              </p>
              <div className="scene-item mt-9 flex flex-col gap-3 sm:flex-row" style={{ transitionDelay: "0.82s" }}>
                <ButtonLink href="#registration" variant="light">
                  Получить сценарий успеха
                </ButtonLink>
                <ButtonLink href="/materials">
                  Страница материалов
                </ButtonLink>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {program.map((item, index) => (
                  <div
                    className="scene-item min-h-[8.5rem] min-w-0 overflow-hidden rounded-lg border border-brass/25 bg-bone p-4 text-cacao shadow-cinematic"
                    key={item.act}
                    style={{ transitionDelay: `${1.04 + index * 0.16}s` }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bordeaux">
                      {item.act}
                    </p>
                    <p className="mt-3 min-w-0 break-words text-xl font-semibold leading-tight">
                      {index === 2 ? "Масштаб" : item.title}
                    </p>
                    <p className="mt-2 text-sm text-cacao/64">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="scene-item scene-item--right mx-auto flex aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-2xl shadow-cinematic lg:ml-auto lg:mr-[-3rem] lg:h-full lg:max-w-none"
              style={{ transitionDelay: "0.98s" }}
            >
              <img
                alt="Кинематографичный кадр запуска"
                className="h-full w-full object-cover"
                src="/background/первый блок.jpeg?v=1"
              />
            </div>
          </SceneReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cacao py-20 sm:py-28" id="format">
        <LightLeak
          baseTransform="rotate(8deg)"
          blur={2}
          className="right-[-18%] top-[-10%] h-[120%] w-[128%] object-cover object-center brightness-105 contrast-110 lg:right-[-5%] lg:top-[12%] lg:h-[78%] lg:w-[30%]"
          mask="left"
          opacity={0.62}
          parallaxX={4}
          parallaxY={8}
          src="/background/2 блок.jpg"
        />
        <Reveal className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Хит сезона"
            title="Сделка — это последняя сцена. Ваша работа — написать сценарий"
            text="Герой этого сценария — клиент. Вы собираете путь так, чтобы он сам захотел сыграть в финальной сцене и дойти до результата."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Смотреть — не значит управлять",
              "Материалы без сцены снова уходят “на потом”",
              "Запуск без сценария превращается в хаос",
              "Система отличает хит от случайной удачи",
            ].map((item) => (
              <div
                className="premium-hover flex min-h-28 items-center rounded-lg border border-brass/25 bg-bone p-5 text-lg font-semibold leading-6 text-cacao shadow-cinematic"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-cacao py-20 sm:py-28">
        <div className="section-shell">
          <SceneReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="scene-item">
              <SectionHeading
                eyebrow="В ролях"
                title="В главных ролях — тот, кто устал быть статистом"
              />
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {audience.map((item, index) => (
                <div
                  className="premium-hover scene-item scene-item--soft scene-item--glow flex h-full min-h-[22rem] flex-col rounded-lg border border-brass/20 bg-bone p-4 text-sm font-semibold leading-6 text-cacao shadow-cinematic"
                  key={item}
                  style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
                >
                  {index !== 1 ? (
                    <img
                      alt=""
                      className="h-40 w-full rounded-xl object-cover"
                      src={audienceImages[index]}
                    />
                  ) : null}
                  <p className={index === 1 ? "flex-1" : "mt-4 flex-1"}>
                    {item}
                  </p>
                  {index === 1 ? (
                    <img
                      alt=""
                      className="order-first mb-4 h-40 w-full rounded-xl object-cover lg:order-last lg:mb-0 lg:mt-4"
                      src={audienceImages[index]}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </SceneReveal>
        </div>
      </section>

      <section className="bg-bone py-20 text-cacao sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              Что внутри
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.98] sm:text-5xl">
              Три акта. Три ключа к власти над рынком
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Продукт как путешествие героя",
              "Продажи как управление вниманием",
              "Масштабирование без выгорания",
              "Артефакты в момент действия",
            ].map((item) => (
              <div className="premium-hover flex min-h-28 items-center rounded-lg border border-bordeaux/25 bg-bordeaux p-5 text-lg font-semibold leading-6 text-bone shadow-ember" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-cacao via-bordeaux/40 to-cacao py-20 sm:py-28" id="program">
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
              eyebrow="Трилогия"
              title="Три акта. Три дня. Три инструмента"
              text="Каждый эфир — отдельная сцена запуска. Вы проходите путь от продукта к продажам и масштабированию, открывая следующий артефакт в нужный момент."
            />
          </div>
          <p className="scene-item mx-auto mt-6 max-w-2xl text-center text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.16s" }}>
            Вы не просто смотрите — вы собираете систему, которой будете управлять
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
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
        </SceneReveal>
      </section>

      {program.map((item, index) => (
        <section
          className={
            index === 1
              ? "bg-bone py-20 text-cacao sm:py-28"
              : "bg-cacao py-20 sm:py-28"
          }
          key={item.act}
        >
          <SceneReveal className="section-shell grid min-w-0 items-center gap-10 lg:grid-cols-[1fr_0.78fr]">
            <img
              alt=""
              className={
                index === 1
                  ? "scene-item scene-item--left order-first aspect-[4/3] w-full rounded-2xl object-cover shadow-cinematic lg:order-first"
                  : "scene-item scene-item--right order-first aspect-[4/3] w-full rounded-2xl object-cover shadow-cinematic lg:order-last lg:self-end"
              }
              src={programImages[index]}
              style={{ transitionDelay: "0.12s" }}
            />
            <div className={index === 1 ? "min-w-0 lg:order-last" : "min-w-0 lg:order-first"}>
              <p
                className={
                  index === 1
                    ? "scene-item text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux"
                    : "eyebrow scene-item"
                }
              >
                {item.act} · {item.date}
              </p>
              <h2
                className={
                  index === 1
                    ? "scene-item mt-4 max-w-full break-words font-display text-5xl leading-[0.95] sm:text-6xl lg:whitespace-nowrap"
                    : "scene-item mt-4 max-w-full break-words text-5xl leading-[0.95] text-bone sm:text-6xl lg:whitespace-nowrap"
                }
                style={{ transitionDelay: "0.2s" }}
              >
                {item.title}
              </h2>
              <p
                className={
                  index === 1
                    ? "scene-item mt-5 text-base leading-7 text-cacao/74"
                    : "scene-item mt-5 text-base leading-7 text-bone/72"
                }
                style={{ transitionDelay: "0.32s" }}
              >
                {item.text}
              </p>
              <div className="mt-8 grid min-w-0 gap-4 sm:grid-cols-2">
                {item.points.map((point, pointIndex) => (
                  <div
                    className={
                      index === 1
                        ? "premium-hover scene-item scene-item--soft w-full min-w-0 overflow-hidden break-words rounded-lg border border-bordeaux/25 bg-bordeaux p-5 text-sm leading-6 text-bone shadow-ember"
                        : "premium-hover scene-item scene-item--soft w-full min-w-0 overflow-hidden break-words rounded-lg border border-brass/25 bg-bone p-5 text-sm leading-6 text-cacao shadow-cinematic"
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
        </section>
      ))}

      <CinematicResults items={results} />

      <section className="relative overflow-hidden bg-cacao py-20 sm:py-28" id="artifacts">
        <LightLeak
          blur={2}
          className="left-[-4%] top-[18%] h-[118vw] w-[118vw] object-contain object-center brightness-110 contrast-110 lg:left-[-8%] lg:top-[-8%] lg:h-[112%] lg:w-[58%] lg:object-contain lg:object-left-top"
          mask="right"
          opacity={0.35}
          parallaxX={4}
          parallaxY={8}
          src="/background/10 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div className="scene-item">
              <SectionHeading
                eyebrow="Механика"
                title="Секретный материал доступен только во время сеанса"
                text="Вы не получаете всё сразу. Каждый эфир — это уровень. Внутри спрятано кодовое слово, как секретный пароль в шпионском кино. Вводите его — и открываете новый артефакт."
              />
            </div>
            <p className="scene-item mt-6 text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.15s" }}>
              Материалы приходят тогда, когда вы уже готовы их применить
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Подключаешься к эфиру",
                "Получаешь кодовое слово",
                "Вводишь его на секретной странице",
                "Открываешь артефакт и сразу внедряешь",
              ].map((step, index) => (
                <div
                  className="premium-hover scene-item scene-item--soft scene-item--unlock rounded-lg border border-brass/25 bg-bone p-5 text-cacao shadow-cinematic"
                  key={step}
                  style={{ transitionDelay: `${0.24 + index * 0.15}s` }}
                >
                  <p className="font-display text-4xl text-bordeaux">
                    {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-cacao/75">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="scene-item scene-item--right scene-item--glow" style={{ transitionDelay: "0.9s" }}>
            <GetCourseEmbedPlaceholder />
          </div>
        </SceneReveal>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-cacao to-bordeaux/55 py-20 sm:py-28">
        <LightLeak
          blur={2}
          className="right-[-18%] top-[-10%] h-[120%] w-[130%] object-cover object-center mix-blend-screen brightness-110 contrast-110 drop-shadow-[0_0_80px_rgba(205,159,101,0.22)] lg:right-[-7%] lg:top-[4%] lg:h-[90%] lg:w-[38%]"
          mask="left"
          opacity={0.55}
          parallaxX={4}
          parallaxY={8}
          src="/background/11 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="scene-item">
              <SectionHeading
                eyebrow="Почему в прямом эфире"
                title="Магия момента работает сильнее скачанной папки"
                text="Когда материал открывается во время эфира, у него появляется контекст. Вы понимаете, зачем он нужен, куда его применить и какой шаг сделать дальше."
              />
            </div>
            <p className="scene-item mt-6 text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.16s" }}>
              Лучше быть в кадре, чем разбирать запись “когда-нибудь потом”
            </p>
          </div>
          <div className="soft-panel rounded-lg p-6">
            <div className="grid gap-5">
              {[
                "Кодовое слово появляется в эфире",
                "Запись доступна 24 часа",
                "Артефакты привязаны к прохождению",
                "Каждый акт усиливает следующий",
              ].map((item, index) => (
                <div
                  className="scene-item scene-item--left flex gap-4 border-b border-brass/15 pb-5 last:border-0 last:pb-0"
                  key={item}
                  style={{ transitionDelay: `${0.12 + index * 0.13}s` }}
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" />
                  <p className="text-sm leading-6 text-bone/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </SceneReveal>
      </section>

      <section className="bg-bone py-20 text-cacao sm:py-28" id="speaker">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              {speaker.badge}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] sm:text-6xl">
              Александра Горева-Куртышева
            </h2>
            <div className="mt-8 rounded-lg bg-cacao p-6 text-bone shadow-cinematic">
              <p className="font-display text-4xl leading-none">
                {speaker.name}
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass">
                {speaker.role}
              </p>
              <p className="mt-5 text-sm leading-6 text-bone/74">
                {speaker.description}
              </p>
              <div className="mt-6 grid gap-3">
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
          <div className="relative mx-auto w-full max-w-sm lg:mt-[8.6rem]">
            <div className="absolute inset-x-6 bottom-2 h-24 rounded-full bg-bordeaux/35 blur-3xl" />
            <img
              alt={speaker.imageAlt}
              className="relative aspect-[4/5] w-full rounded-lg border border-bordeaux/20 object-cover object-top shadow-cinematic"
              src={speaker.imageSrc}
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cacao py-20 sm:py-28">
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
            eyebrow="Финальные титры"
            title="Коротко о важном"
          />
          <div className="mt-8">
            {faq.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-cinema-radial py-20 sm:py-28">
        <LightLeak
          blur={2}
          className="left-[-15%] top-[-16%] h-[132%] w-[130%] object-cover object-center lg:inset-x-0 lg:top-[-18%] lg:mx-auto lg:h-[138%] lg:w-[82%]"
          mask="center"
          opacity={0.2}
          parallaxX={0}
          parallaxY={0}
          src="/background/14 блок.jpg"
        />
        <SceneReveal className="section-shell relative z-10 text-center">
          <p className="eyebrow scene-item">Финальный трейлер</p>
          <h2 className="scene-item mx-auto mt-4 max-w-3xl text-5xl leading-[0.94] text-bone sm:text-6xl" style={{ transitionDelay: "0.12s" }}>
            Бронируйте место в первом ряду
          </h2>
          <p className="scene-item mx-auto mt-5 max-w-2xl text-lg leading-8 text-bone/76" style={{ transitionDelay: "0.28s" }}>
            3 дня. 3 эфира. 3 артефакта. Система, которая изменит ваше кино.
          </p>
          <p className="scene-item mx-auto mt-5 max-w-2xl text-lg font-semibold leading-7 text-brass" style={{ transitionDelay: "0.4s" }}>
            Заполните форму — и мы вышлем вам пропуск за кулисы главной премьеры сезона
          </p>
          <div className="scene-item mt-9 flex flex-col justify-center gap-3 sm:flex-row" style={{ transitionDelay: "0.55s" }}>
            <ButtonLink href="#registration" variant="light">
              Занять место в зале
            </ButtonLink>
            <ButtonLink href="/thanks">
              Посмотреть следующий шаг
            </ButtonLink>
          </div>
        </SceneReveal>
      </section>

      <section className="bg-cacao py-20 sm:py-28" id="care">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
          <div className="soft-panel rounded-lg p-6 sm:p-8">
            <p className="eyebrow">{care.badge}</p>
            <h2 className="mt-4 text-4xl leading-[0.96] text-bone sm:text-5xl">
              {care.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bone/76">
              {care.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          <div className="mx-auto w-full max-w-[15rem] rounded-[1.75rem] border border-brass/25 bg-bone/10 p-3 shadow-cinematic">
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
          <div className="rounded-lg border border-brass/20 bg-gradient-to-br from-bordeaux via-cacao to-obsidian p-6 shadow-cinematic sm:p-8">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_1fr]">
              <div>
                <p className="font-display text-3xl">Запуск 3.0</p>
                <p className="mt-4 max-w-md text-sm leading-6 text-bone/72">
                  3-дневная трилогия о том, как собрать систему, где каждый
                  кадр работает на результат: продукт, продажи и
                  масштабирование.
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
                    Эфиры
                  </a>
                  <a className="transition hover:text-brass" href="#speaker">
                    Эксперт
                  </a>
                  <a className="transition hover:text-brass" href="#registration">
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

            <div className="mt-10 flex flex-col gap-4 border-t border-brass/18 pt-6 text-sm text-bone/60 sm:flex-row sm:items-center sm:justify-between">
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
    </main>
  );
}
