// const {setGlobalOptions} = require("firebase-functions");
// const {onRequest} = require("firebase-functions/https");
// const logger = require("firebase-functions/logger");

import { setGlobalOptions } from "firebase-functions";
// import { onRequest } from "firebase-functions/https";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// const functions = require("firebase-functions");
import * as functions from "firebase-functions";

// const app = require("./src/index.js");
import app from "./src/index.js";

setGlobalOptions({ maxInstances: 1 });

// exports.api = functions.https.onRequest(app);
export const api = functions.https.onRequest(app);