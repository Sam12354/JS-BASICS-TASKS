import { getUserData } from "../utils.js";
import { get, post } from "./api.js";

const endpoints = {
    applyJob: "/data/applications",
    jobId: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    applicationsByUser: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function applyJob(offerId){
    return post(endpoints.applyJob, {offerId})
}

export async function getApplicationsId(offerId){
    const userData = getUserData()

    const requests = [
        get(endpoints.jobId(offerId))
    ];

    if(userData){
        requests.push(get(endpoints.applicationsByUser(offerId, userData._id)))
    }

    const [apply, hasApplied] = await Promise.all(requests)

    return {
        apply,
        hasApplied: Boolean(hasApplied)
    }
}