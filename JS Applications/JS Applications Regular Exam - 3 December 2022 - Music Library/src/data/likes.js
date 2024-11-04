import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    like: "/data/likes",
    albumLikesId: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    likesByUserId: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeAlbum(albumId){
    return post(endpoints.like, {albumId})
}

export async function getLikeByAlbumId(albumId){
    const userData = getUserData()

    const requests = [
        get(endpoints.albumLikesId(albumId))
    ]

    if(userData){
        requests.push(get(endpoints.likesByUserId(albumId, userData._id)))
    }

    const [likes, hasLiked] = await Promise.all(requests)

    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }

}