const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");

const app = require("./src/index.js");

setGlobalOptions({ maxInstances: 1 });

exports.api = functions.https.onRequest(app);