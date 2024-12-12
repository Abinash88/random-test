import {
  ControllerFieldState,
  UseFormStateReturn,
  type ControllerRenderProps,
  type FieldValues,
  type Path,
  type UseFormReturn,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import Input, { type InputProps } from "../input";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";

type TProps<T extends FieldValues> = {
  form: UseFormReturn<T, any, undefined>;
  name: Path<T>;
  label?: string;
  description?: string;
  required?: boolean;
  htmlFor?: string;
  horizontal?: boolean;
  input?: Omit<InputProps, keyof ControllerRenderProps<FieldValues, string>> & {
    disabled?: boolean;
  };
  className?: string;
  charLimit?: number;
  render?: <T extends FieldValues>(
    props: ControllerRenderProps<T, Path<T>>,
    fieldState: ControllerFieldState,
    formState: UseFormStateReturn<T>,
  ) => React.ReactNode;
  labelClass?: string
};

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  input,
  horizontal,
  htmlFor,
  required,
  description,
  render,
  className,
  labelClass,
  charLimit,
}: TProps<T>) {
  const [eyeToggle, setEyeToggle] = useState(false)
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <FormItem
          className={cn(
            className,
            horizontal
              ? "flex-row items-center justify-between space-y-0"
              : "md:space-y-1.5 space-y-0.5",
          )}
        >
          {(label || charLimit) && (
            <div
              className={cn(charLimit ? "flex items-center justify-between" : "")}
            >
              {label && (
                <FormLabel htmlFor={htmlFor} className={cn(`w-fit text-dark-500 3xl:text-sm text-xs`, labelClass)}>
                  {label} {required && <span className="text-danger"> *</span>}
                </FormLabel>
              )}
              {charLimit && (
                <p className="text-xs text-dark-500">
                  {field.value?.length || 0} / {charLimit}
                </p>
              )}
            </div>
          )}
          <FormControl>
            {render ? (
              render(field, fieldState, formState)
            ) : (
              <div className={cn(input?.type === "password" && "flex items-center relative ")}>
                <Input {...input} type={eyeToggle ? "text" : input?.type} {...field} />
                {eyeToggle ?
                  <Eye onClick={() => { setEyeToggle(!eyeToggle) }} className="size-5 absolute right-2 cursor-pointer text-dark-500" />
                  :
                  <EyeClosed onClick={() => { setEyeToggle(!eyeToggle) }} className="size-5 absolute right-2 cursor-pointer text-dark-500" />
                }
              </div>
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
