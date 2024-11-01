import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    like: "/data/likes",
    funFactLikesId: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    likesByUsedId: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeFact(factId){
    return post(endpoints.like, {factId})
}

export async function getLikeByFactId(factId){
    const userData = getUserData()

    const requests = [
        get(endpoints.funFactLikesId(factId))
    ]

    if(userData){
        requests.push(get(endpoints.likesByUsedId(factId, userData._id)))
    }

    const [likes, hasLiked] = await Promise.all(requests)

    return {
        likes,
        hasLiked: Boolean(hasLiked)
    }

}

