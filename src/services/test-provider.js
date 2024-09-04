import React from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "../redux/store";
import router from "./router";
const TestProvider = ({ children, customStore = false }) => {
  if (customStore) {
    return (
      <Provider store={customStore}>
        <RouterProvider router={router}>{children}</RouterProvider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <RouterProvider router={router}>{children}</RouterProvider>
      </Provider>
    );
  }
};

export default TestProvider;
