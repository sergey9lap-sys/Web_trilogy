import Link from "next/link";
import { clsx } from "clsx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  className?: string;
  rel?: string;
  target?: string;
  opensRegistrationPopup?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  rel,
  target,
  opensRegistrationPopup = false,
}: ButtonLinkProps) {
  return (
    <Link
      className={clsx(
        "cta-glow inline-flex min-h-14 min-w-[19rem] items-center justify-center rounded-md px-10 py-4 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-brass/60 focus:ring-offset-2 focus:ring-offset-cacao",
        variant === "primary" &&
          "bg-bordeaux text-bone shadow-ember hover:bg-carmine",
        variant === "secondary" &&
          "border border-bordeaux/70 bg-bordeaux text-bone shadow-ember hover:border-carmine hover:bg-carmine",
        variant === "light" &&
          "bg-bone text-cacao shadow-[0_0_34px_rgba(240,230,203,0.16)] hover:bg-brass hover:text-cacao",
        variant === "ghost" && "text-brass hover:text-bone",
        className,
      )}
      href={href}
      rel={rel}
      target={target}
      data-registration-popup={opensRegistrationPopup ? "true" : undefined}
    >
      {children}
    </Link>
  );
}
