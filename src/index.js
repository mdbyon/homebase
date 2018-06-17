import React from "react";
import ReactDOM from "react-dom";
import App from "grommet/components/App";
import Split from "grommet/components/Split";
import "./index.css";
import Main from "./Main";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
