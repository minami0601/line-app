import React, { createContext } from "react";

type isOn = {
  isOn: boolean; // true:確認画面、false:登録画面
};

type store = {
  isOn: isOn;
  // setIsOn: (value: isOn) => void;
  setIsOn: (value: boolean) => void;
};

const defaultStore = {
  isOn: false,
  setIsOn: (isOn: boolean) => {}
};

const Context: React.Context<store> = createContext(defaultStore);
export default Context;
export const { Provider, Consumer } = Context;
