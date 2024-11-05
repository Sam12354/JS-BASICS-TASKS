import { getAllItems } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { updateNav } from "../utils.js";
import { itemTemplate } from "./partials/item.js";

const catalogTemplate = (item) => html`
        <h2>Collectibles</h2>
    <section id="dashboard">
        ${item.length ? item.map(itemTemplate) : html`<h2>There are no items added yet.</h2>`}
    </section>
`

export async function catalogView(){
    const items = await getAllItems()
    render(catalogTemplate(items))
}