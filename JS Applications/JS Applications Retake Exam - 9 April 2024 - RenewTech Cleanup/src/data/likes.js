import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    like: "/data/likes",
    solutionLikesId: (id) => `/data/likes?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`,
    likesByUserId: (solutionId, userId) => `/data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeSolution(solutionId){
    return post(endpoints.like, { solutionId })
}

export async function getLikeBySolutionid(solutionId){
    const userData = getUserData()

    const requests = [
        get(endpoints.solutionLikesId(solutionId))
    ];

    if(userData){
        requests.push(get(endpoints.likesByUserId(solutionId, userData._id)))
    }

    const [likes, hasLiked] = await Promise.all(requests)
    return {
        likes, 
        hasLiked: Boolean(hasLiked)
    }
}