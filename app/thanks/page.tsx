import { ButtonLink } from "@/components/button-link";
import { bizonUrl, dates } from "@/lib/content";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-cinema-radial">
      <section className="section-shell flex min-h-screen items-center py-16">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="eyebrow">Регистрация подтверждена</p>
          <h1 className="mt-5 text-5xl leading-[0.95] text-bone sm:text-7xl">
            Вы в списке гостей премьеры
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-bone/75">
            Сохраните даты трилогии и держите под рукой страницу материалов:
            кодовые слова появятся во время эфиров.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {dates.map((item) => (
              <div className="soft-panel rounded-lg p-5" key={item.day}>
                <p className="text-sm text-brass">{item.day}</p>
                <p className="mt-2 text-2xl font-semibold text-bone">
                  {item.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-bone/40">
                  {item.act}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/materials">Перейти к материалам</ButtonLink>
            <ButtonLink href={bizonUrl} variant="secondary">
              Перейти на эфир
            </ButtonLink>
            <ButtonLink href="/" variant="ghost">
              На лендинг
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
