import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/albums?sortBy=_createdOn%20desc",
    getAlbumId: "/data/albums",
    details: "/data/albums/"
}

export async function getAllAlbums(){
    return get(endpoints.getAll)
}

export async function getAlbumById(id){
    return get(endpoints.details + id)
}

export async function createAlbum(singer, album, imageUrl, release, label, sales){
    return post(endpoints.getAlbumId, { singer, album, imageUrl, release, label, sales })
}

export async function update(id, data){
    return put(endpoints.details + id, data)
}

export async function deleteAlbum(id){
    return del(endpoints.details + id)
}