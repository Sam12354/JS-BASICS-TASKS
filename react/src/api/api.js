import * as request from './requester.js';

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const items = Object.values(result);

    return items;
};

export const getOne = async (itemId) => {
    const result = await request.get(`${baseUrl}/${itemId}`);

    return result;
};

export const create = async (itemData) => {
    const result = await request.post(`${baseUrl}`, itemData);

    return result;
};