import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-transparent bg-green-600 text-white",
        secondary: "border-transparent bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
        destructive: "border-transparent bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
        outline: "text-neutral-600 border-neutral-200 dark:text-neutral-400 dark:border-neutral-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
