import { useEffect, useState } from "react";
import { create, getAll, getOne, remove } from "../api/api.js";
import { useNavigate } from "react-router-dom";

export function useGetAllItems() {

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

    const itemGetHandler = async (data) => {
        return await create(data);
    };

    return itemGetHandler;
}