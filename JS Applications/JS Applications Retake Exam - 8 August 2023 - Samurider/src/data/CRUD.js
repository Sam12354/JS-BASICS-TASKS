import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/motorcycles?sortBy=_createdOn%20desc",
    getById: "/data/motorcycles",
    details: "/data/motorcycles/",
    search: (query) => `/data/motorcycles?where=model%20LIKE%20%22${query}%22`
}

export async function getAllMotorcycles(){
    return get(endpoints.getAll)
}

export async function getMotorcycleById(id){
    return get(endpoints.details + id)
}

export async function addMotorcycle(model, imageUrl,  year,  mileage, contact, about){
    return post(endpoints.getById, { model, imageUrl,  year,  mileage, contact, about })
}

export async function update(id, motorcycleData){
    return put(endpoints.details + id, motorcycleData)
}

export async function deleteMotorcycle(id){
    return del(endpoints.details + id)
}

export async function searchMotorcicle(query){
    return await get(endpoints.search(query))
}
