import { useEffect, useState } from "react";
import { create, getAll, getOne } from "../api/api.js";

export function useGetAllitems() {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await getAll();
            setItems(result);
        }
        fetchData();
    }, []);

    return [items, setItems]
}


export function useGetOneItem(itemId) {
    const [item, setItem] = useState({})

    useEffect(() => {
        async function fetchData() {
            const result = await getOne(itemId);
            setItem(result);
        }
        fetchData();
    }, [itemId]);

    return [item, setItem]
}

export function useCreateItem() {

    const itemGetHandler = (data) => create(data)

    return itemGetHandler
}