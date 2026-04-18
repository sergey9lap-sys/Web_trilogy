import Link from "next/link";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        "cta-glow inline-flex min-h-12 items-center justify-center rounded-md px-5 py-3 text-center text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brass/60 focus:ring-offset-2 focus:ring-offset-cacao",
        variant === "primary" &&
          "bg-bordeaux text-bone shadow-ember hover:bg-carmine",
        variant === "secondary" &&
          "border border-brass/60 bg-cacao/30 text-bone hover:border-brass hover:bg-brass/10",
        variant === "light" &&
          "bg-bone text-cacao shadow-[0_0_34px_rgba(240,230,203,0.16)] hover:bg-brass hover:text-cacao",
        variant === "ghost" && "text-brass hover:text-bone",
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
