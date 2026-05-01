type ActCardProps = {
  act: string;
  date: string;
  title: string;
  text: string;
  anchor: string;
  artifact: string;
};

export function ActCard({
  act,
  date,
  title,
  text,
  anchor,
  artifact,
}: ActCardProps) {
  return (
    <article className="premium-hover flex h-full flex-col rounded-lg border border-brass/30 bg-bone p-6 text-cacao shadow-cinematic">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bordeaux">
            {act}
          </p>
          <h3 className="mt-4 text-3xl text-cacao">{title}</h3>
        </div>
        <span className="flex min-w-[3.75rem] items-center justify-center whitespace-nowrap rounded-full border border-bordeaux/35 px-3 py-1 text-sm text-bordeaux">
          {date}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-cacao/74">{text}</p>
      <p className="mt-4 text-sm font-semibold leading-6 text-bordeaux">
        {anchor}
      </p>
      <div className="mt-auto border-t border-bordeaux/18 pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-cacao/50">
          Артефакт
        </p>
        <p className="mt-2 text-lg font-semibold text-bordeaux">{artifact}</p>
      </div>
    </article>
  );
}
