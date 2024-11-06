import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/offers?sortBy=_createdOn%20desc",
    getById: "/data/offers",
    details: "/data/offers/"
}

export async function getAllJobs(){
    return get(endpoints.getAll)
}

export async function getJobById(id){
    return get(endpoints.details + id)
}

export async function createJob(title, imageUrl, category, description, requirements, salary){
    return post(endpoints.getById, {title, imageUrl, category, description, requirements, salary})
}

export async function update(id, data){
    return put(endpoints.details + id, data)
}

export async function deleteJob(id){
    return del(endpoints.details + id)
}