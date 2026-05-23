import { ButtonLink } from "@/components/button-link";

export function GetCourseEmbedPlaceholder() {
  return (
    <div
      className="soft-panel rounded-lg p-5 sm:p-7"
      aria-label="Регистрация на трилогию"
    >
      <p className="eyebrow">Регистрация</p>
      <h3 className="mt-3 text-3xl leading-tight text-bone">
        Регистрируйтесь и смотрите лекции в записи
      </h3>
      <p className="mt-4 text-base leading-7 text-bone/76">
        Регистрируйтесь и смотрите лекции в записи + выполняйте задания
        челленджа.
      </p>
      <p className="mt-5 text-lg font-semibold leading-7 text-brass">
        Доступ открыт на 72 часа.
      </p>
      <ButtonLink
        className="mt-6 w-full min-w-0"
        href="#registration"
        opensRegistrationPopup
        variant="light"
      >
        Получить доступ к эфирам
      </ButtonLink>
    </div>
  );
}
