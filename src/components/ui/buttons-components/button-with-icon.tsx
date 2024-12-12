import { cn } from "@/lib/utils";
import { ChevronDown, PlusIcon, Trash2, UploadIcon } from "lucide-react";
import type { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { forwardRef, type ComponentProps } from "react";
import Image from "../Image";
import Button from "./button";

type TProps = ComponentProps<typeof Button> & {
  icon?: "add" | "export" | "header" | "table-export" | React.ReactNode;
  reverse?: boolean;
  sort?: boolean | "asc" | "desc";
  img?: StaticImageData | string
};

const ButtonWithIcon = forwardRef<HTMLButtonElement, TProps>(
  ({ icon = "add", sort, reverse, img, ...props }, ref) => {
    const ico = () => {
      switch (icon) {
        case "export":
          return <UploadIcon size={18} className="mr-3" />;
        case "delete":
          return <Trash2 size={18} className="mr-3" />;
        case "table-export":
          return (
            <UploadIcon
              size={18}
              className="sm:mr-0 xl:mr-3 size-4 3xl:size-5"
            />
          );
        case "header":
          return (
            <ChevronDown
              className={cn(
                "ml-2 size-4 transition-all ease-in-out",
                sort === "asc" && "rotate-180",
              )}
            />
          );
        case "add":
          return <PlusIcon className="mr-2 size-4 3xl:size-5" id="plus-icon" />;
        default:
          return icon;
      }
    };

    return (
      <Button
        {...props}
        ref={ref}
        className={cn(props.className, reverse && "flex-row-reverse")}
      >
        {img
          ?
          <Image src={img} className="w-5 h-5 object-contain" height={100} width={100} alt="icon" />
          : null
        }
        {img ? null : ico()}
        {props.children}
      </Button>
    );
  },
);

ButtonWithIcon.displayName = "ButtonWithIcon";

export default ButtonWithIcon;


