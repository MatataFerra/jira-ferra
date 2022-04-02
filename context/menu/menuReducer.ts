import { MenuState } from "./";

export type MenuActionType =
  | { type: "[Menu] - Close" }
  | { type: "[Menu] - Open" };

export const menuReducer = (
  state: MenuState,
  action: MenuActionType
): MenuState => {
  switch (action.type) {
    case "[Menu] - Close":
      return {
        ...state,
        menuStatus: true,
      };

    case "[Menu] - Open":
      return {
        ...state,
        menuStatus: false,
      };

    default:
      return state;
  }
};
