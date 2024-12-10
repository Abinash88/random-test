import { cn, formatNumber } from "@/lib/utils";
import * as React from "react";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  preventFocusStyles?: boolean;
  preventNegativeValues?: boolean;
  maxVal?: number;
  ignoreDefaultOnChange?: boolean;
  ignorePriceLimit?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      maxVal,
      preventFocusStyles = true,
      preventNegativeValues,
      ignoreDefaultOnChange = false,
      ignorePriceLimit = false,
      ...props
    },
    ref,  
  ) => {
    const step = props.step?.toString().split(".")[1]?.length || 0;

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 3xl:h-11 w-full rounded-md border border-border bg-background px-3 py-2 text-xs 3xl:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:pl-3.5 transition-all ease-in-out duration-300",
          !preventFocusStyles
            ? "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1"
            : "outline-none",
          className,
        )}
        ref={ref}
        {...props}
        value={props.value === 0 ? 0 : props.value || ""}
        {...(type === "number" && {
          onWheel: (e) => e.currentTarget.blur(),
        })}
        {...(type === "number" &&
          preventNegativeValues && {
          onKeyDown: (e) =>
            formatNumber(e, step - 1, maxVal, ignorePriceLimit),
          min: 0,
        })}
        {...(type === "number" &&
          !ignoreDefaultOnChange && {
          onChange: (e) =>
            props.onChange?.(
              Number.isNaN(e.target.valueAsNumber)
                ? ""
                : (e.target.valueAsNumber as any),
            ),
        })}
      />
    );
  },
);
Input.displayName = "Input";

export default Input;
