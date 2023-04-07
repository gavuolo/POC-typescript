import moviesRepositories from "../repositories/moviesRepositories.js";
import { MovieBody } from "../protocols/moviesProtocols.js"

async function createMovie(movie: MovieBody){
    await moviesRepositories.createRepositoryMovie(movie)
}

export default{
    createMovie,
}