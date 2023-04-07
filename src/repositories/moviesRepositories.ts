import db from "../config/database.js";
import { QueryResult } from "pg";
import { MovieBody } from "../protocols/moviesProtocols.js"

async function createRepositoryMovie(movie: MovieBody): Promise<QueryResult> {
    await db.query(
        `
            INSERT INTO movies (name, platform, genre, status)
            VALUES ($1, $2, $3, false)
            `,
        [movie.name, movie.platform, movie.genre]
    )
}

async function allMovieRepository(){
    return await db.query(`
        SELECT * FROM movies
    `)
}

export default {
    createRepositoryMovie,
    allMovieRepository,
}