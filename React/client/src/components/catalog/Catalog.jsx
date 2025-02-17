import { useEffect, useState } from "react"
import { getAll } from "../../api/api.js"
import CatalogItem from "./catalogItem/CatalogItem.jsx";
import { useGetAllitems } from "../../hooks/userService.js";

export default function Catalog() {

    const [items, setitems] = useGetAllitems()

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {items.length > 0   

                ? items.map(item => <CatalogItem key={ item._id } { ...item } />)
                : <h3 className="no-articles">No articles yet</h3>
            }
        </section>
    )
}