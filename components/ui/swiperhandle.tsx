import { cva, type VariantProps } from "class-variance-authority"
import React from "react"
import { cn } from "@/lib/utils"

const swiperHandleVariants = cva(
  "items-center justify-center flex cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 border border-neutral-700",
      },
      size: {
        default: "p-2 w-[40px] h-[40px]",
        lg: "p-4 w-[60px] h-[60px]"
      },
      type: {
        circle: "rounded-full",
        square: "rounded-none"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
)

export interface SwiperHandleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof swiperHandleVariants> {}

const SwiperHandle = React.forwardRef<HTMLDivElement, SwiperHandleProps>(
  ({ className, variant, size, type, ...props }, ref) => {

    return (
      <div
        className={cn(swiperHandleVariants({ variant, size, type, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

SwiperHandle.displayName = "SwiperHandle"

export { SwiperHandle, swiperHandleVariants }
