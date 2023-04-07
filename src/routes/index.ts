import { Router } from "express";
import movieRoutes from "./moviesRoutes.js";

const routes = Router();

routes.use('/', movieRoutes)

export default routes;