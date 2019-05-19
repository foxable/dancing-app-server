import * as ReactDOM from "react-dom";
import * as React from "react";

import { DataService } from "./DataService";

import App from "./components/App";

import "../styles/app.scss";

const service = new DataService("./api");

ReactDOM.render(
    <App service={service}/>,
    document.getElementById("app")
);
