import moviesRepositories from "../repositories/moviesRepositories.js";
import { MovieBody } from "../protocols/moviesProtocols.js"
import errors from "../errors/index.js";

async function createMovie(movie: MovieBody) {
    await moviesRepositories.createRepositoryMovie(movie)
}

async function allMovie() {
    const { rows, rowCount } = await moviesRepositories.allMovieRepository();
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function deleteMovies(id: number) {
    const movieById = await moviesRepositories.getById(id)
    if (movieById.rowCount === 0) throw errors.notFoundError();
    await moviesRepositories.deleteMovieRepository(id)
    return movieById.rows[0]
}

async function updateStatus(id: number, comment: string) {
    const movieById = await moviesRepositories.getById(id)
    if (movieById.rowCount === 0) throw errors.notFoundError();
    await moviesRepositories.updateMovieRepository(id, comment)
    return movieById.rows[0]
}
export default {
    createMovie,
    allMovie,
    deleteMovies,
    updateStatus
}