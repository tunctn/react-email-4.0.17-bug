import { Heading as HeadingComponent, type HeadingProps } from "@react-email/components";
import { cn } from "../lib/utils";

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <HeadingComponent className={cn("my-[30px] font-semibold text-[24px] text-black", className)} {...props}>
      {children}
    </HeadingComponent>
  );
};
