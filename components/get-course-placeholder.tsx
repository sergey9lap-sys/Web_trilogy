export function GetCourseEmbedPlaceholder() {
  return (
    <div
      id="registration"
      className="soft-panel rounded-lg p-5 sm:p-7"
      aria-label="Регистрация на трилогию"
    >
      <p className="eyebrow">Регистрация</p>
      <h3 className="mt-3 text-3xl leading-tight text-bone">
        Забронируйте место на премьере запуска
      </h3>
      <p className="mt-4 text-sm leading-6 text-bone/70">
        Оставьте заявку и получите доступ к трилогии: три эфира, три этапа и
        материалы, которые открываются в процессе прохождения.
      </p>
      <div className="mt-6 grid gap-3">
        <div className="min-h-12 rounded-md border border-brass/22 bg-obsidian/45 px-4 py-3 text-sm text-bone/45">
          Ваше имя
        </div>
        <div className="min-h-12 rounded-md border border-brass/22 bg-obsidian/45 px-4 py-3 text-sm text-bone/45">
          Телефон или почта
        </div>
      </div>
      <p className="mt-5 text-sm font-semibold leading-6 text-brass">
        Разница между “знаю” и “зарабатываю” — это система
      </p>
      <a
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-bone shadow-ember transition hover:bg-carmine"
        href="/thanks"
      >
        Зарегистрироваться
      </a>
    </div>
  );
}
