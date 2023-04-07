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

async function allMovieRepository() {
    return await db.query(`
        SELECT * FROM movies
    `)
}
async function getById(id: number) {
    return await db.query(`
    SELECT * FROM movies
    WHERE id = $1
    `, [id])
}
async function deleteMovieRepository(id: number) {
    return await db.query(`
    DELETE FROM movies WHERE id = $1
    `, [id])
}

async function updateMovieRepository(id: number, comment: string) {
    return await db.query(`
    UPDATE movies 
    SET status = true, comments = $1 WHERE id = $2
    `,
    [comment, id]
    )
}

export default {
    createRepositoryMovie,
    allMovieRepository,
    deleteMovieRepository,
    getById,
    updateMovieRepository
}