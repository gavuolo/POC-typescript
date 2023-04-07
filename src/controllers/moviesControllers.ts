import moviesServices from "../services/moviesServices.js";
import { Request, Response, Nextfunction } from "express";
import { MovieBody } from "../protocols/moviesProtocols.js"

async function postMovie(req: Request, res: Response, next: Nextfunction) {

    const movie = req.body as MovieBody;
    //name, platform, genre, status, comments

    try {
        await moviesServices.createMovie(movie)
        return res.sendStatus(201);
    } catch (err) {
        console.log(err);
        next(err)
    }
}

async function getMovies(req: Request, res: Response, next: Nextfunction) {
    try {
        const movies = await moviesServices.allMovie();
        return res.send({ movies })
    } catch (err) {
        next(err)
    }

}
export default {
    postMovie,
    getMovies
}