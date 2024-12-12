import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

const TitleVariants = cva("text-secondary font-medium", {
  variants: {
    variant: {
      default: "md:text-lg text-base py-1 font-medium text-dark-600",
      auth_title: "md:text-2xl text-center py-2 font-medium text-xl text-dark-600",
      auth_p: "md:text-sm text-center text-xs text-dark-300",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface TextCompProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof TitleVariants> {
  asChild?: boolean
  className?: string
}

export const TextComp = React.forwardRef<HTMLParagraphElement, TextCompProps>(({ asChild, variant, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp className={cn(TitleVariants({ variant }), className)} ref={ref} {...props} />
  )
})

TextComp.displayName = "TextComp"