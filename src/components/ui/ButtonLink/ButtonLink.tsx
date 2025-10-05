import { cn } from '@/utils/cn';
import Link from 'next/link';
import React, { PropsWithChildren } from 'react';

interface ButtonLinkProps extends PropsWithChildren {
  href: string;
  className?: string;
}

export default function ButtonLink({ children, href, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        'bg-primary-black-4 p-xl:text-base p-lg:text-xs flex h-full max-h-[40px] w-auto items-center gap-x-2.5 rounded-full py-2 pr-6 pl-4 text-[#B8C6D9]',
        className,
      )}
    >
      {children}
    </Link>
  );
}
