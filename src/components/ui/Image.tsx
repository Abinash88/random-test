import { PLACEHOLDER_IMAGE } from "@/assests";
import type { PartialBy } from "@/types/utils";
import * as NImage from "next/image";
import { forwardRef } from "react";

type TProps = PartialBy<NImage.ImageProps, "src" | "alt" | "height" | "width">;

const Image = forwardRef<HTMLImageElement, TProps>(
  ({ src, height, width, alt, ...props }, ref) => {
    return (
      <NImage.default
        src={src || PLACEHOLDER_IMAGE}
        alt={alt || "Image"}
        width={width || 1920}
        height={height || 1080}
        ref={ref}
        {...props}
      />
    );
  },
);

Image.displayName = "Image";

export default Image;
