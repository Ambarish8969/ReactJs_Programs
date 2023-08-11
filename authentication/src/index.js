import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RouterComp from "./components/RouterComp";

ReactDOM.render(
  <>
    <BrowserRouter>
      <RouterComp />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
