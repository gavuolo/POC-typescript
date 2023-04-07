import moviesServices from "../services/moviesServices.js";
import { Request, Response, Nextfunction } from "express";

async function postMovie(req: Request, res: Response, nex: Nextfunction) {
    
    const movie = req.body ;

    //name, plataform, genre, status, comments
    console.log('oi')
    return res.send(movie)
    // try {
    //     await moviesServices.createMovie(movie)
    //     return res.send('oi')
    // } catch (err) {
    //     console.log(err);
    //     return res.send('não funcionou')
    // }
}

export default {
    postMovie
}