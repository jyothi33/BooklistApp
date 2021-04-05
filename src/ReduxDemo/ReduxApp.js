import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import PayloadCakeContainer from "./components/PayloadCakeContainer";
import ItemContainer from "./components/ItemContainer";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <PayloadCakeContainer /> */}
        <ItemContainer cake />
        <ItemContainer />
      </div>
    </Provider>
  );
};

export default ReduxApp;
