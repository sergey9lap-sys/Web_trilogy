import { ActCard } from "@/components/act-card";
import { ButtonLink } from "@/components/button-link";
import { FaqItem } from "@/components/faq-item";
import { GetCourseEmbedPlaceholder } from "@/components/get-course-placeholder";
import { LightLeak } from "@/components/light-leak";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { audience, care, faq, footer, program, results, speaker } from "@/lib/content";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[760px] bg-cinema-radial lg:min-h-[860px]">
        <LightLeak
          blur={2}
          className="left-[-8%] top-[-6%] h-[112%] w-[116%] object-cover object-center lg:left-[-6%] lg:top-[12%] lg:h-[86%] lg:w-[50%] lg:object-left-center"
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
              <ButtonLink href="#registration">
                Зарегистрироваться
              </ButtonLink>
            </div>
          </header>

          <div className="grid flex-1 items-center gap-10 pb-12 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:pt-20">
            <Reveal delay={80}>
              <p className="eyebrow">Премьера трилогии · 5-7 мая</p>
              <h1 className="mt-5 max-w-4xl text-6xl leading-[0.9] text-bone sm:text-7xl lg:text-8xl">
                Запуск 3.0
              </h1>
              <p className="mt-6 max-w-3xl font-display text-4xl leading-none text-bone sm:text-5xl">
                Соберите запуск как систему — а не как набор разрозненных
                действий
              </p>
              <p className="mt-4 max-w-2xl text-lg font-semibold leading-7 text-brass">
                Вы перестаёте надеяться на продажи — начинаете ими управлять
              </p>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-bone/80">
                3-дневная трилогия, в которой вы собираете продукт, продажи и
                масштабирование в цельную систему, открывая рабочие материалы
                прямо во время эфиров.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#registration">
                  Забронировать место
                </ButtonLink>
                <ButtonLink href="/materials" variant="secondary">
                  Страница материалов
                </ButtonLink>
              </div>
            </Reveal>

            <div className="soft-panel rounded-lg p-5 sm:p-7">
              <p className="eyebrow">3 акта</p>
              <div className="mt-6 space-y-5">
                {program.map((item) => (
                  <div
                    className="flex items-center justify-between gap-5 border-b border-brass/15 pb-5 last:border-0 last:pb-0"
                    key={item.act}
                  >
                    <div>
                      <p className="text-sm text-brass">{item.act}</p>
                      <p className="mt-1 text-xl font-semibold text-bone">
                        {item.title}
                      </p>
                    </div>
                    <p className="text-sm text-bone/60">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            eyebrow="Зачем другой формат"
            title="Люди устали смотреть эфиры и складывать материалы “на потом”"
            text="Информации стало слишком много. Обычный вебинар легко потерять среди вкладок, а скачанная рабочая тетрадь часто так и остаётся нетронутой."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Скачали → не внедрили",
              "Досмотрели → не собрали результат",
              "Поняли → не сделали",
              "Смотрели — не значит сделали",
            ].map((item) => (
              <div
                className="premium-hover flex min-h-28 items-center rounded-lg border border-brass/20 bg-obsidian/40 p-5 text-lg font-semibold leading-6 text-bone/86"
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Для кого эта трилогия"
              title="Для тех, кто хочет собрать запуск в систему, а не тащить его на себе"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item) => (
                <div
                  className="premium-hover rounded-lg border border-brass/20 bg-obsidian/40 p-5 text-sm font-semibold leading-6 text-bone/74"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-20 text-cacao sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              Что внутри
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.98] sm:text-5xl">
              Три дня, за которые вы собираете продукт, продажи и масштаб в одну систему
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Продукт, который хочется пройти",
              "Продажи без давления",
              "Масштаб без хаоса",
              "Материалы в момент внедрения",
            ].map((item) => (
              <div className="premium-hover rounded-lg border border-bordeaux/18 bg-cacao/5 p-5 text-lg font-semibold leading-6 text-cacao/82" key={item}>
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
        <Reveal className="section-shell relative z-10">
          <SectionHeading
            eyebrow="Формат прохождения"
            title="Вы не просто слушаете. Вы собираете запуск по частям."
            text="На каждом эфире появляется кодовое слово. Вы вводите его на странице материалов и открываете следующий шаг запуска: рабочий файл, схему или ссылку для внедрения."
          />
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-semibold leading-7 text-brass">
            Каждый эфир — шаг к результату, а не к “пониманию”
          </p>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {program.map((item) => (
              <ActCard key={item.act} {...item} />
            ))}
          </div>
        </Reveal>
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
          <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p
                className={
                  index === 1
                    ? "text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux"
                    : "eyebrow"
                }
              >
                {item.act} · {item.date}
              </p>
              <h2
                className={
                  index === 1
                    ? "mt-4 font-display text-5xl leading-[0.95] sm:text-6xl"
                    : "mt-4 text-5xl leading-[0.95] text-bone sm:text-6xl"
                }
              >
                Эфир “{item.title}”
              </h2>
              <p
                className={
                  index === 1
                    ? "mt-5 text-base leading-7 text-cacao/74"
                    : "mt-5 text-base leading-7 text-bone/72"
                }
              >
                {item.text}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {item.points.map((point) => (
                <div
                  className={
                    index === 1
                      ? "premium-hover rounded-lg border border-bordeaux/18 bg-cacao/5 p-5 text-sm leading-6 text-cacao/74"
                      : "premium-hover rounded-lg border border-brass/18 bg-obsidian/35 p-5 text-sm leading-6 text-bone/72"
                  }
                  key={point}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-bone py-20 text-cacao sm:py-28">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
                Результат прохождения
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.98] sm:text-5xl">
                Что у вас будет через 3 дня
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {results.map((item, index) => (
                <div
                  className="premium-hover rounded-lg border border-bordeaux/18 bg-cacao/5 p-5"
                  key={item}
                >
                  <p className="font-display text-4xl text-bordeaux">
                    {index + 1}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-6 text-cacao/78">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
        <Reveal className="section-shell relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Механика артефактов"
              title="Материалы появляются тогда, когда они реально нужны"
              text="Вы не получаете всё сразу и не складываете это в папку “посмотреть потом”. На каждом эфире открывается следующий артефакт — и вы сразу понимаете, куда его применить."
            />
            <p className="mt-6 text-lg font-semibold leading-7 text-brass">
              Вы внедряете, а не откладываете
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Подключаетесь к эфиру",
                "Получаете кодовое слово",
                "Вводите код на странице материалов",
                "Открываете артефакт и внедряете",
              ].map((step, index) => (
                <div
                  className="premium-hover rounded-lg border border-brass/20 bg-bordeaux/20 p-5"
                  key={step}
                >
                  <p className="font-display text-4xl text-brass">
                    {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-bone/75">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <GetCourseEmbedPlaceholder />
        </Reveal>
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
        <Reveal className="section-shell relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Почему в прямом эфире"
              title="Самое ценное происходит не в скачанной папке, а в моменте"
              text="Когда материал открывается во время эфира, у него появляется контекст. Вы сразу понимаете, зачем он нужен, куда его применить и какой шаг сделать дальше."
            />
            <p className="mt-6 text-lg font-semibold leading-7 text-brass">
              Результат появляется в моменте, а не “когда-нибудь потом”
            </p>
          </div>
          <div className="soft-panel rounded-lg p-6">
            <div className="grid gap-5">
              {[
                "Кодовое слово появляется в эфире",
                "Запись доступна ограниченное время",
                "Бонусы привязаны к прохождению",
                "Каждый день усиливает следующий",
              ].map((item) => (
                <div className="flex gap-4 border-b border-brass/15 pb-5 last:border-0 last:pb-0" key={item}>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brass" />
                  <p className="text-sm leading-6 text-bone/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-bone py-20 text-cacao sm:py-28" id="speaker">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
              {speaker.badge}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.94] sm:text-6xl">
              Кто ведёт эфиры
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
          <div className="relative mx-auto w-full max-w-sm">
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
          className="left-[-15%] top-[-16%] h-[132%] w-[130%] object-cover object-center lg:left-auto lg:right-[-6%] lg:top-[-40%] lg:h-[138%] lg:w-[82%]"
          mask="center"
          opacity={0.2}
          parallaxX={0}
          parallaxY={0}
          src="/background/13 блок.jpg"
        />
        <Reveal className="section-shell relative z-10">
          <SectionHeading
            eyebrow="Вопросы"
            title="Что важно понять до старта"
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
        <div className="section-shell relative z-10 text-center">
          <p className="eyebrow">Финальный вызов</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-5xl leading-[0.94] text-bone sm:text-6xl">
            Соберите запуск как систему — а не как набор случайных действий
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-bone/76">
            3 эфира. 3 артефакта. 3 этапа, которые собираются в одну цельную
            логику запуска.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-7 text-brass">
            Вы уходите не с идеями — а с готовым запуском
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#registration">Зарегистрироваться</ButtonLink>
            <ButtonLink href="/thanks" variant="secondary">
              Посмотреть следующий шаг
            </ButtonLink>
          </div>
        </div>
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
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brass/60 bg-cacao/30 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-brass/10"
                href={footer.vkUrl}
              >
                Написать ВКонтакте
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-brass/60 bg-cacao/30 px-5 py-3 text-sm font-semibold text-bone transition hover:bg-brass/10"
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
                  3-дневная трилогия о том, как собрать запуск в систему:
                  продукт, продажи и масштабирование по частям.
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
              <p>© 2026 Самозапуск. Все права защищены.</p>
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
