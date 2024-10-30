import { get, post, put, del } from "./api.js";

const endpoints = {
    getAll: "/data/cars?sortBy=_createdOn%20desc",
    getCarByid: "/data/cars",
    carDetails: "/data/cars/",
    search: (query) => `/data/cars?where=model%20LIKE%20%22${query}%22`
}

export async function getAllCars(){
    return get(endpoints.getAll)
}

export async function carsById(id){
    return get(endpoints.carDetails + id)
}

export async function addCar(model, imageUrl, price, weight, speed, about){
    return post(endpoints.getCarByid, { model, imageUrl, price, weight, speed, about })
}

export async function update(id, carData){
    return put(endpoints.carDetails + id, carData)
}

export async function deleteCar(id){
    return del(endpoints.carDetails + id)
}

// za surch o6te edin crud
export async function searchCar(query){
    return await get(endpoints.search(query))
}

