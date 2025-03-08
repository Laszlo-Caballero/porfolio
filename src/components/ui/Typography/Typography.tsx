import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { FC, forwardRef, HTMLAttributes } from "react";

type variant = "h1" | "h2" | "h3" | "h4" | "p" | "span";

const typography = cva("text-sm font-montserrat", {
  variants: {
    text: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl",
      paragraph: "text-sm",
    },
  },
  defaultVariants: {
    text: "paragraph",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typography> {
  variant: variant;
}
export const Typography: FC<TypographyProps> = forwardRef<
  HTMLParagraphElement,
  TypographyProps
>(({ variant: Component = "p", children, className, text, ...rest }, ref) => {
  return (
    <Component
      className={cn(typography({ text }), className)}
      {...rest}
      ref={ref}
    >
      {children}
    </Component>
  );
});
