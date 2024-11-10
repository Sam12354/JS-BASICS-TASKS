import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    go: "/data/going",
    goingEventId: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
    goingByUserId: (eventId, userId) => `/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function goEvent(eventId){
    return post(endpoints.go, {eventId})
}

export async function goEventById(eventId){
    const userData = getUserData()

    const requests = [
        get(endpoints.goingEventId(eventId))
    ]

    if(userData){
        requests.push(get(endpoints.goingByUserId(eventId, userData._id)))
    }

    const [going, hasGone] = await Promise.all(requests)

    return {
        going,
        hasGone: Boolean(hasGone)
    }

}