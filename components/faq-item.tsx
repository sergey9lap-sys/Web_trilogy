type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group premium-hover border-b border-brass/20 py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold text-bone">
        {question}
        <span className="text-2xl text-brass transition group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-4 max-w-3xl text-sm leading-6 text-bone/70">{answer}</p>
    </details>
  );
}
