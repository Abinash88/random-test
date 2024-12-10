import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"



const ContainerVariants = cva("w-full h-full", {
  variants: {
    variant: {
      default: "max-w-[1700px] mx-auto h-full w-[95%] md:w-[90%]",
      main_container: "w-full h-full ",
      sidebar: "",
      centered: " flex w-full h-[100dvh] overflow-hidden items-center justify-center",
      gridCentered: "grid ",
      markdown: " max-w-3xl py-8 md:py-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})


interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ContainerVariants> {
  asChild?: boolean
  className?: string
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ asChild, variant, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp className={cn(ContainerVariants({ variant }), className)} ref={ref} {...props} />
  )
})

Container.displayName = "Container"