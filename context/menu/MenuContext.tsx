import { createContext } from "react";

interface ContextProps {
  menuStatus: boolean;
  open: () => void;
  close: () => void;
}

export const MenuContext = createContext({} as ContextProps);
