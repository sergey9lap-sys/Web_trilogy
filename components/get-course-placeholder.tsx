"use client";

export function GetCourseEmbedPlaceholder() {
  const registrationUrl =
    "https://agkedu.getcourse.ru/masshtabirovanie#ltBlock2227817978";

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
      <div className="mt-6">
        <a
          className="inline-flex w-full items-center justify-center rounded-md bg-bone px-5 py-4 text-center text-sm font-semibold text-bordeaux shadow-cinematic transition hover:bg-brass hover:text-cacao focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 focus:ring-offset-cacao"
          href={registrationUrl}
          rel="noreferrer"
          target="_blank"
        >
          Зарегистрироваться
        </a>
      </div>
      <p className="mt-5 text-sm font-semibold leading-6 text-brass">
        Разница между “знаю” и “зарабатываю” — это система. Начнём съёмки 11 мая.
      </p>
    </div>
  );
}
