import * as ReactDOM from "react-dom";
import * as React from "react";

import { ApiService } from "./ApiService";
import * as config from "../api.config.json";

import App from "./App";

const api = new ApiService(config);

ReactDOM.render(
    <App api={api}/>,
    document.getElementById("app")
);