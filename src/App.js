import React, { useState } from "react";
import "./App.css";
import { Provider } from "./redux/store";
import { initialState, reducer } from "./redux/index";
import Home from "./common/home";
import DetailCompany from "./common/detailCompany";
function App() {
  const [page, handlePage] = useState("home");
  const [datas, setDatas] = useState(null);
  const pageState = (page, data) => {
    switch (page) {
      case "home":
        handlePage("home");

        break;
      case "detail-company":
        handlePage("detail-company");
        setDatas(data);
        break;
      default:
        break;
    }
  };
  function renderContent(data) {
    switch (data) {
      case "home":
        return <Home handleChange={pageState} />;
        break;
      case "detail-company":
        return <DetailCompany handleChange={pageState} data={datas} />;
        break;
      default:
        break;
    }
  }

  return (
    <Provider initialState={initialState} reducer={reducer}>
      <div className="container">{renderContent(page)}</div>
    </Provider>
  );
}

export default App;
