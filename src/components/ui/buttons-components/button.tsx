import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs 3xl:text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-success-500/15 text-success-500 hover:bg-success-500/20",
        warning: "bg-yellow-500/15 text-yellow-500 hover:bg-yellow-500/20",
        outline:
          "border border-border bg-background text-dark-700 hover:bg-primary-600/20",
        "outline-muted":
          "border border-muted bg-transparent text-dark-500 hover:bg-muted/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        tertiary: "bg-primary-650 text-primary",
        ghost: "hover:bg-accent text-dark-500",
        link: "text-primary underline underline-offset-4",
        "table-header": "flex-row-reverse font-semibold text-dark",
        dark: "bg-black  dark:bg-popover text-background dark:text-dark",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-sm px-3",
        xs: "size-6 rounded-sm p-1",
        lg: "h-10 3xl:h-11 rounded-sm px-8",
        xl: "h-11 3xl:h-14 rounded-lg px-12",
        table: "h-9.5 px-6 py-2",
        icon: "h-9 w-9 aspect-square 3xl:h-10 3xl:w-10",
        "icon-sm": "h-8 w-8 aspect-square 3xl:h-9 3xl:w-9",
        "no-pad": "p-0",
      },
      shape: {
        pill: "rounded-full",
      },
      withShadow: {
        default: "",
        "xl-primary": "hover:shadow-xl hover:shadow-primary/30",
      },
      animation: {
        default: "active:scale-95",
        no: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  message?: string;
  hideRing?: boolean;
  normalbtn?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      withShadow,
      asChild = false,
      loading,
      message,
      children,
      animation,
      shape,
      hideRing,
      normalbtn,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          !hideRing &&
          "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          normalbtn && "!h-0 !px-0 !text-dark-600 !bg-transparent",
          buttonVariants({
            variant,
            size,
            withShadow,
            shape,
            animation,
            className,
          }),
        )}
        ref={ref}
        {...props}
        disabled={props.disabled || loading}
        type={props.type || "button"}
      >
        {loading ? (
          <span className="flex items-center gap-3">
            {loading && <Loader2 className="animate-spin" />}
            {message && <span>{message}</span>}
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export default Button;
