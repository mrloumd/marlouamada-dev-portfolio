"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-brand-dark hover:bg-brand active:bg-brand-dark text-white shadow-sm shadow-brand/20",
  outline:
    "border border-zinc-700 hover:border-zinc-500 bg-transparent hover:bg-zinc-800/60 text-zinc-300 hover:text-zinc-100",
  ghost: "bg-transparent hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
