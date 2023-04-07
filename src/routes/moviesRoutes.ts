import { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";
const movieRoutes = Router();

movieRoutes.post('/movie', moviesControllers.postMovie)

export default movieRoutes;