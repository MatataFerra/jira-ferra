import { MenuActionType } from "./menuReducer";

export const closeMenu = (): MenuActionType => {
  return {
    type: "[Menu] - Close",
  };
};

export const openMenu = (): MenuActionType => {
  return {
    type: "[Menu] - Open",
  };
};
