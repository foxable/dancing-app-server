import * as ReactDOM from "react-dom";
import * as React from "react";
import DirectusSDK from "@directus/sdk-js";

import * as config from "../api.config.json";

import App from "./App";

const client = new DirectusSDK(config);

ReactDOM.render(
    <App client={client}/>,
    document.getElementById("app")
);