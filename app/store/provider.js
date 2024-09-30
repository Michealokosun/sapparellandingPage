"use client";

const { Provider } = require("react-redux");
const { default: store } = require("./store");

export const UserProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
