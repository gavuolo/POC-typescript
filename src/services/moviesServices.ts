import moviesRepositories from "../repositories/moviesRepositories.js";

async function createMovie({ name, plataform, genre }){
    await moviesRepositories.createRepositoryMovie({ name, plataform, genre})
}

export default{
    createMovie,
}