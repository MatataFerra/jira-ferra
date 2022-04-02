import { FC, useReducer } from "react";
import { MenuContext, menuReducer, closeMenu, openMenu } from "./";

export interface MenuState {
  menuStatus: boolean;
}

const Menu_INITIAL_STATE: MenuState = {
  menuStatus: false,
};

export const MenuProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(menuReducer, Menu_INITIAL_STATE);

  const open = () => dispatch(openMenu());
  const close = () => dispatch(closeMenu());

  return (
    <MenuContext.Provider
      value={{
        ...state,
        close,
        open,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
