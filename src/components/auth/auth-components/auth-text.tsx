import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"



const TitleVariants = cva("text-secondary font-medium", {
  variants: {
    variant: {
      default: "md:text-lg text-base py-1 font-medium text-dark-600",
      auth_title: "md:text-xl text-center py-2 font-medium text-lg text-dark-600",
      auth_p: "md:text-sm text-xs text-dark-200",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})


interface AuthTextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof TitleVariants> {
  asChild?: boolean
  className?: string
}

export const AuthText = React.forwardRef<HTMLParagraphElement, AuthTextProps>(({ asChild, variant, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp className={cn(TitleVariants({ variant }), className)} ref={ref} {...props} />
  )
})

AuthText.displayName = "AuthText"