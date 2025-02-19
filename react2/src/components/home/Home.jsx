import { useEffect, useState } from "react";
import { getAll } from "../../api/api.js";
import HomeItem from "./HomeItem.jsx";

export default function Home() {

    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await getAll();
         
            setItems(result.reverse().slice(0, 3));
        }
        fetchData();
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) -->  */}
                { items.length > 0
                    ? items.map( item => <HomeItem key={ item._id } { ...item } />)
                    /* <!-- Display paragraph: If there is no games  --> */
                    :  <p className="no-articles">No games yet</p>
                }

            </div>
        </section>
    )
}