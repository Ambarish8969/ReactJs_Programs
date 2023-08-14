import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterComp from "./RouterComp";

ReactDOM.render(
  <>
    <BrowserRouter>
      <RouterComp />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
