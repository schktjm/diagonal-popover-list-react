import { ReactNode, useContext } from "react";
import classes from "./PopoverContent.module.css";
import { clsx } from "clsx";
import { PopoverStateContext } from "./ProviderProvider";

type Props = {
  children: ReactNode;
  className?: string;
};

export const PopoverContent = ({ children, className }: Props) => {
  const { isShown } = useContext(PopoverStateContext);

  return (
    <div
      className={clsx(
        classes.wrapper,
        isShown ? classes.expanded : classes.unexpanded,
        className
      )}
      aria-expanded={isShown}
    >
      {children}
    </div>
  );
};
