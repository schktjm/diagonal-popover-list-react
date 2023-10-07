import { ReactNode, useContext } from "react";
import { PopoverContent } from "./PopoverContent";

import classes from "./Popover.module.css";
import {
  PopoverActionContext,
  PopoverProvider,
  PopoverStateContext,
} from "./ProviderProvider";

type Props = {
  children: ReactNode;
  onClick?: () => void;
};
export const Popover = ({ children }: Props) => {
  return (
    <PopoverProvider>
      <Content>{children}</Content>
    </PopoverProvider>
  );
};

const Content = ({ children }: Props) => {
  const { show, hide } = useContext(PopoverActionContext);
  const { isShown } = useContext(PopoverStateContext);

  return (
    <div
      onClick={isShown ? hide : show}
      onMouseEnter={show}
      onMouseLeave={hide}
      className={classes.wrapper}
    >
      {children}
    </div>
  );
};

Popover.Content = PopoverContent;
