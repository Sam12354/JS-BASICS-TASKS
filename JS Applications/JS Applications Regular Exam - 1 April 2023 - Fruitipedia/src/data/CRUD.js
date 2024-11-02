import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/fruits?sortBy=_createdOn%20desc",
    getFruitById: "/data/fruits",
    fruitDetails: "/data/fruits/",
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`
}

export async function getAllFruits(){
    return get(endpoints.getAll)
}

export async function getFruitsById(id){
    return get(endpoints.fruitDetails + id)
}

export async function create(name, imageUrl, description, nutrition){
    return post(endpoints.getFruitById, { name, imageUrl, description, nutrition })
}

export async function update(id, data){
    return put(endpoints.fruitDetails + id, data)
}

export async function deleteFruit(id){
    return del(endpoints.fruitDetails + id)
}

export async function searchFruit(query){
    return await get(endpoints.search(query))
}