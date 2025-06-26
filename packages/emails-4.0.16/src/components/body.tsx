import { Body as BodyComponent, type BodyProps } from "@react-email/components";
import { cn } from "../lib/utils";

export const Body = ({ children, className, ...props }: BodyProps) => {
  return (
    <BodyComponent className={cn("font-sans", className)} {...props}>
      {children}
    </BodyComponent>
  );
};
