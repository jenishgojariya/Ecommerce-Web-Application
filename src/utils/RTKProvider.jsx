"use client";

import { store } from "@/lib/store";
import React from "react";
import { Provider } from "react-redux";

const RTKProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default RTKProvider;
