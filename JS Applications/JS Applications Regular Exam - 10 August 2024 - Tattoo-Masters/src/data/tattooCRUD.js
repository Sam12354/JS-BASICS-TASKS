import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/tattoos?sortBy=_createdOn%20desc",
    addTatooo: "/data/tattoos",
    tattooDetails: "/data/tattoos/",
}

export async function getAllTattoos(){
    return get(endpoints.getAll)
}

export async function getTattoesById(id){
    return get(endpoints.tattooDetails + id)
}

export async function createTattoo(type, imageUrl,  description,  userType){
    return post(endpoints.addTatooo, {
        type, imageUrl,  description,  userType
    })
}

export async function update(id, tattooData){
    return put(endpoints.tattooDetails + id, tattooData)
}

export async function deleteTattoo(id){
    return del(endpoints.tattooDetails + id)
}