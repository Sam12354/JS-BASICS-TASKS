import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    like: "/data/likes",
    tattooLikesid: (id) => `/data/likes?where=tattooId%3D%22${id}%22&distinct=_ownerId&count`,
    likesByUsedId: (tattooId, userId) => `/data/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function likeTattoo(tattooId){
    return post(endpoints.like, { tattooId })
}

export async function getLikeByCharacterId(tattooId){
    const userData = getUserData();

    const requests = [
        get(endpoints.tattooLikesid(tattooId)) // broi likes
    ];

    if(userData){
        requests.push(get(endpoints.likesByUsedId(tattooId, userData._id)))
    }

    const [likes, hasLiked] = await Promise.all(requests)

    return {
        likes, 
        hasLiked: Boolean(hasLiked)
    }

}
