import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store";
import HooksCakeContainer from "./components/HooksCakeContainer";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
};

export default ReduxApp;
