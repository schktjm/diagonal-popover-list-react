import { ReactNode, createContext, useState } from "react";

type StateProps = {
  isShown: boolean;
};

type ActionProps = {
  show: () => void;
  hide: () => void;
};

export const PopoverActionContext = createContext<ActionProps>({
  show: () => {},
  hide: () => {},
});

export const PopoverStateContext = createContext<StateProps>({
  isShown: false,
});

type Props = {
  children: ReactNode;
};

export const PopoverProvider = ({ children }: Props) => {
  const [isShown, setIsShown] = useState(false);

  const show = () => setIsShown(true);
  const hide = () => setIsShown(false);

  return (
    <PopoverStateContext.Provider value={{ isShown }}>
      <PopoverActionContext.Provider value={{ show, hide }}>
        {children}
      </PopoverActionContext.Provider>
    </PopoverStateContext.Provider>
  );
};
