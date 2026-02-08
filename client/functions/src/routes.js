// import { Router } from "express";
// import dogsController from "./controllers/dogsController.js";
// import picturesController from "./controllers/picturesController.js";

const Router = require("express");
const dogsController = require("./controllers/dogsController.js");
const picturesController = require("./controllers/picturesController.js");

const routes= Router();

routes.use("/dogs", dogsController);
routes.use("/pictures", picturesController);

// export default routes;

module.exports = routes;