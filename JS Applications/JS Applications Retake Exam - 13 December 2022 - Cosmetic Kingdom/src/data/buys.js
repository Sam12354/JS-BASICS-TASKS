import { getUserData } from "../utils.js";
import { get, post } from "./api.js";


const endpoints = {
    buy: "/data/bought",
    BuysId: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    BuysByUserId: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function buyProduct(productId){
    return post(endpoints.buy, {productId})
}

export async function buyerId(productId){
    const userData = getUserData()

    const requests = [
        get(endpoints.BuysId(productId))
    ]

    if(userData){
        requests.push(get(endpoints.BuysByUserId(productId, userData._id)))
    }

    const [buys, hasBought] = await Promise.all(requests)

    return {
        buys,
        hasBought: Boolean(hasBought)
    }

}
