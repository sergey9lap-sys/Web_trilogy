type ActCardProps = {
  act: string;
  date: string;
  title: string;
  text: string;
  artifact: string;
};

export function ActCard({ act, date, title, text, artifact }: ActCardProps) {
  return (
    <article className="soft-panel premium-hover rounded-lg p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">
            {act}
          </p>
          <h3 className="mt-4 text-3xl text-bone">{title}</h3>
        </div>
        <span className="flex min-w-[3.75rem] items-center justify-center rounded-full border border-brass/40 px-3 py-1 text-sm text-brass whitespace-nowrap">
          {date}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-bone/70">{text}</p>
      <div className="mt-7 border-t border-brass/20 pt-5">
        <p className="text-xs uppercase tracking-[0.18em] text-bone/50">
          Артефакт
        </p>
        <p className="mt-2 text-lg font-semibold text-brass">{artifact}</p>
      </div>
    </article>
  );
}
