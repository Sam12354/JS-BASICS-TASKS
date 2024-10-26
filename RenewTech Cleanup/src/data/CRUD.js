import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/solutions?sortBy=_createdOn%20desc",
    newSolution: "/data/solutions",
    solutionById: "/data/solutions/"
}

export async function getAllSolutions(){
    return get(endpoints.getAll)
}

export async function getSolutionById(id){
    return get(endpoints.solutionById + id)
}

export async function createSolution(type, imageUrl, description, learnMore){
    return post(endpoints.newSolution, {type, imageUrl, description, learnMore})
}

export async function updateSolution(id, solutionData){
    return put(endpoints.solutionById + id, solutionData)
}

export async function deleteSolution(id){
    return del(endpoints.solutionById + id)
}

