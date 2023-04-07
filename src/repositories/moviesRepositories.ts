import db from "../config/database.js";

async function createRepositoryMovie(movie) {
    console.log('REPOSITORY:', db)
    await db.query(
        `
            INSERT INTO movies (name, plataform, genre)
            VALUES ($1, $2, $3)
            `,
        [movie.name, movie.plataform, movie.genre]
    )
}

export default {
    createRepositoryMovie,
}