import * as ReactDOM from "react-dom";
import * as React from "react";

import { ApiService } from "./ApiService";

import App from "./App";

import "../styles/app.scss";

const api = new ApiService("./api");

ReactDOM.render(
    <App api={api}/>,
    document.getElementById("app")
);
