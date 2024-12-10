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
  charLimit,
}: TProps<T>) {
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
              : "3xl:space-y-3 space-y-2",
          )}
        >
          {(label || charLimit) && (
            <div
              className={cn(charLimit && "flex items-center justify-between")}
            >
              {label && (
                <FormLabel htmlFor={htmlFor} className="w-fit">
                  {label} {required && <span className="text-primary"> *</span>}
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
              <Input {...input} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
