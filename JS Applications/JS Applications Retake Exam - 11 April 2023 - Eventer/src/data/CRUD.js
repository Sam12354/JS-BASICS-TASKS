import { get, post, put, del } from "./api.js";

const endpoint = {
    getAll: "/data/events?sortBy=_createdOn%20desc",
    getById: "/data/events",
    details: "/data/events/"
}

export async function getAllEvents(){
    return get(endpoint.getAll)
}

export async function getEventById(id){
    return get(endpoint.details + id)
}

export async function createEvent(name, imageUrl, category, description, date){
    return post(endpoint.getById, {name, imageUrl, category, description, date})
}

export async function update(id, data){
    return put(endpoint.details + id, data)
}

export async function deleteEvent(id){
    return del(endpoint.details + id)
}