import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cacao px-5 py-16 text-bone">
      <section className="w-full max-w-xl rounded-lg border border-brass/25 bg-bordeaux/35 p-6 shadow-cinematic sm:p-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl leading-tight">Страница не найдена</h1>
        <p className="mt-4 text-sm leading-6 text-bone/75">
          Возможно, ссылка изменилась или материал уже переехал на другую
          страницу.
        </p>
        <Link
          className="mt-6 inline-flex items-center justify-center rounded-md bg-brass px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cacao transition hover:bg-bone focus:outline-none focus:ring-2 focus:ring-bone focus:ring-offset-2 focus:ring-offset-cacao"
          href="/"
        >
          На главную
        </Link>
      </section>
    </main>
  );
}
