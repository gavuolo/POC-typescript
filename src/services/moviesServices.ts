import moviesRepositories from "../repositories/moviesRepositories.js";
import { MovieBody } from "../protocols/moviesProtocols.js"
import errors from "../errors/index.js";

async function createMovie(movie: MovieBody){
    await moviesRepositories.createRepositoryMovie(movie)
}

async function allMovie(){
    const { rows, rowCount } = await moviesRepositories.allMovieRepository();
    if (!rowCount) throw errors.notFoundError();
    return rows;
}
export default{
    createMovie,
    allMovie,
}