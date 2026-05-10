type ActCardProps = {
  act: string;
  date: string;
  title: string;
  text: string;
  result: string;
};

export function ActCard({
  act,
  date,
  title,
  text,
  result,
}: ActCardProps) {
  return (
    <article className="premium-hover flex h-full flex-col rounded-lg border border-brass/30 bg-bone p-4 text-cacao shadow-cinematic">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
            {act}
          </p>
          <h3 className="mt-3 text-2xl text-cacao">{title}</h3>
        </div>
        <span className="flex max-w-[9rem] items-center justify-center rounded-full border border-bordeaux/35 px-3 py-1 text-center text-sm leading-5 text-bordeaux">
          {date}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-cacao/74">{text}</p>
      <div className="mt-auto border-t border-bordeaux/18 pt-4">
        <p className="text-xs uppercase tracking-[0.18em] text-cacao/50">
          Результат
        </p>
        <p className="mt-2 text-base font-semibold text-bordeaux">{result}</p>
      </div>
    </article>
  );
}
