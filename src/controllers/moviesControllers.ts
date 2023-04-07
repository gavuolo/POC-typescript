import moviesServices from "../services/moviesServices.js";
import { Request, Response, NextFunction } from "express";
import { MovieBody } from "../protocols/moviesProtocols.js"

async function postMovie(req: Request, res: Response, next: NextFunction) {

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

async function getMovies(req: Request, res: Response, next: NextFunction) {
    try {
        const movies = await moviesServices.allMovie();
        return res.send({ movies })
    } catch (err) {
        next(err);
    }

}

async function deleteMovie(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id
    try{
        await moviesServices.deleteMovies(id)
        return res.status(204).send('Filme deletado com sucesso')
    } catch(err){
        next(err);
    }
}
export default {
    postMovie,
    getMovies,
    deleteMovie
}