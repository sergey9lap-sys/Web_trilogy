type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[0.98] text-bone sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-7 text-bone/75 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}
