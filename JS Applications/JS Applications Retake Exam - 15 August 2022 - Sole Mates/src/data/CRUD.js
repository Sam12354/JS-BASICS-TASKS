import { get, post, put, del } from "./api.js";

const endpoint = {
    getAll: "/data/shoes?sortBy=_createdOn%20desc",
    getItemId: "/data/shoes",
    details: "/data/shoes/",
    search: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
}

export async function getAllItems(){
    return get(endpoint.getAll)
}

export async function getItemsById(id){
    return get(endpoint.details + id)
}

export async function createItem(brand, model, imageUrl, release, designer, value){
    return post(endpoint.getItemId, {brand, model, imageUrl, release, designer, value})
}

export async function update(id, data){
    return put(endpoint.details + id, data)
}

export async function deleteItem(id){
    return del(endpoint.details + id)
}

export async function searchItem(query){
    return await get(endpoint.search(query))
}