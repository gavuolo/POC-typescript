import { Router } from "express";
import moviesControllers from "../controllers/moviesControllers.js";
import { validateSchema } from "../middlewares/movieValidationMiddleware.js";
import { movieSchemma } from "../schemas/movieSchema.js";
const movieRoutes = Router();

movieRoutes.post('/movie', validateSchema(movieSchemma), moviesControllers.postMovie)

export default movieRoutes;