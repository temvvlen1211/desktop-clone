import { atom } from "recoil";

export const currentUserState = atom({
  key: "User",
  default: undefined,
});

export const BasketState = atom({
  key: "Basket",
  default: undefined,
});
