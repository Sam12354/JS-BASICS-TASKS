import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/products?sortBy=_createdOn%20desc",
    getCosmeticId: "/data/products",
    details: "/data/products/"
}

export async function getAllCosmetics(){
    return get(endpoints.getAll)
}

export async function getCosmeticById(id){
    return get(endpoints.details + id)
}

export async function createCosmetic(name, imageUrl, category, description, price){
    return post(endpoints.getCosmeticId, {name, imageUrl, category, description, price})
}

export async function update(id, data){
    return put(endpoints.details + id, data)
}

export async function deleteCosmetic(id){
    return del(endpoints.details + id)
}