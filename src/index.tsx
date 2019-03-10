import { render } from "react-dom";
import * as React from "react";
import DirectusSDK from "@directus/sdk-js";

import config from "../api.config.json";

import App from "./App";

const client = new DirectusSDK(config);

render(<App client={client}/>, document.getElementById("app"));