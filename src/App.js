import React, { Component } from "react";
import "./App.css";
import { Provider } from "./redux/store";
import {initialState,reducer} from './redux/index'
import Home from "./common/home";
import DetailCompany from "./common/detailCompany";
function App() {

  return (
    <Provider initialState={initialState} reducer={reducer}>
      <div className="container">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
