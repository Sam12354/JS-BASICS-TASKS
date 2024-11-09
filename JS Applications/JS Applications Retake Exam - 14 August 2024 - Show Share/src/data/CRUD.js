import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/shows?sortBy=_createdOn%20desc",
    getById: "/data/shows",
    details: "/data/shows/",
    search: (query) => `/data/shows?where=title%20LIKE%20%22${query}%22`
}

export async function getAllMovies(){
    return get(endpoints.getAll)
}

export async function getMovieByid(id){
    return get(endpoints.details + id)
}

export async function createMovie(title, imageUrl,  genre,  country, details){
    return post(endpoints.getById, { title, imageUrl,  genre,  country, details })
}

export async function update(id, data){
    return put(endpoints.details + id, data)
}  

export async function deleteMovie(id){
    return del(endpoints.details + id)
}

export async function searchMovie(query){
    return get(endpoints.search(query))
}