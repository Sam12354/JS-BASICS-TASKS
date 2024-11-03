import { getAllCosmetics } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { cosmitTemplate } from "./partials/cosmetic.js";

const catalogTemplate = (cosmetic) => html`
    <h2>Products</h2>
    <section id="dashboard">
        ${cosmetic.length ? cosmetic.map(cosmitTemplate) : html`<h2>No products yet.</h2>`}
    </section>
`

export async function catalogView(){
    const cosmetics = await getAllCosmetics()
    render(catalogTemplate(cosmetics))
}