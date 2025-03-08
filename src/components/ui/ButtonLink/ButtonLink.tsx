import { cx } from "class-variance-authority";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface ButtonLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function ButtonLink({
  children,
  href,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cx(
        "pl-4 pr-6 h-full py-2 bg-primary-black-2 flex items-center rounded-full w-auto  gap-x-2.5",
        className
      )}
    >
      {children}
    </Link>
  );
}
