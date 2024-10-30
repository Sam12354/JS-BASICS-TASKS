import { get, post, put, del } from "./api.js";

const endpoints ={
    getAll: "/data/cyberpunk?sortBy=_createdOn%20desc",
    addItem: "/data/cyberpunk",
    itemDetails: "/data/cyberpunk/"
}

export async function getAllItems(){
    return get(endpoints.getAll)
}

export async function getitemById(id){
    return get(endpoints.itemDetails + id)
}

export async function createItem(item, imageUrl,  price,  availability, type, description){
    return post(endpoints.addItem, {item, imageUrl,  price,  availability, type, description})
}

export async function update(id, itemData){
    return put(endpoints.itemDetails + id, itemData)
}

export async function deleteItem(id){
    return del(endpoints.itemDetails + id)
}