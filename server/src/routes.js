import { Router } from "express";
import dogsController from "./controllers/dogsController.js";

const routes= Router();

routes.use("/dogs", dogsController);

export default routes;