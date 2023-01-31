import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cx from "classnames";
import { Button } from "@chakra-ui/react";
interface IMainButtonProps {
  message?: string;
}

const MainButton = forwardRef<
  HTMLButtonElement & IMainButtonProps,
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement> & IMainButtonProps,
    HTMLButtonElement
  >
>(({ children, className, message, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cx(className, "w-full")}
      width={"full "}
      bgColor={"orange.400"}
      color={"white"}
      fontSize={"xl"}
      fontFamily={"monospace"}
      p={"6"}
    >
      {children}
    </Button>
  );
});
export default MainButton;
