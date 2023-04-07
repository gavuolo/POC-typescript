import moviesServices from "../services/moviesServices.js";
import { Request, Response, Nextfunction } from "express";
import { MovieBody } from "../protocols/moviesProtocols.js"

async function postMovie(req: Request, res: Response, nex: Nextfunction) {

    const movie = req.body as MovieBody;
    //name, platform, genre, status, comments

    try {
        await moviesServices.createMovie(movie)
        return res.send('oi')
    } catch (err) {
        console.log(err);
        return res.send('não funcionou')
    }
}

export default {
    postMovie
}