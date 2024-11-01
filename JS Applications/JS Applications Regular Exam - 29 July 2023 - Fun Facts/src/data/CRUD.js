import { get, post, put, del } from "./api.js";

const endpoint = {
    getAll: "/data/facts?sortBy=_createdOn%20desc",
    getFactById: "/data/facts",
    factDetails: "/data/facts/",
}

export async function getAllFacts(){
    return get(endpoint.getAll)
} 

export async function getFactsById(id){
    return get(endpoint.factDetails + id)
}

export async function addFact(category, imageUrl, description, moreInfo){
    return post(endpoint.getFactById, { category, imageUrl, description, moreInfo })
}

export async function update(id, factsData){
    return put(endpoint.factDetails + id, factsData)
} 

export async function deleteFact(id){
    return del(endpoint.factDetails + id)
}

