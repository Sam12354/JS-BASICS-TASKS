import { getAllFruits } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { fruitTemplate } from "./partials/fruit.js";

const detailsTemplate = (fruits) => html`
     <h2>Fruits</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${fruits.length ? fruits.map(fruitTemplate) : html`<h2>No fruit info yet.</h2>`}
    
    </section>
   
`

export async function catalogView(){

    const fruits = await getAllFruits()
    render(detailsTemplate(fruits))

}