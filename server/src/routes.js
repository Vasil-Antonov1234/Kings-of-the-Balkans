import { Router } from "express";
import dogsController from "./controllers/dogsController.js";

const routes= Router();

routes.use("/data/dogs/males", dogsController);

export default routes;