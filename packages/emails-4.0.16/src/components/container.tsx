import { Container as ContainerComponent, type ContainerProps } from "@react-email/components";
import { cn } from "../lib/utils";

export const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <ContainerComponent className={cn("mx-auto my-6 px-4", className)} {...props}>
      {children}
    </ContainerComponent>
  );
};
