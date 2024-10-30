import { getAllItems } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { itemTemplate } from "./partials/item.js";

const catalogTemplate = (items) => html`
<h3 class="heading">Market</h3>
    <section id="dashboard">
        ${items.length ? items.map(itemTemplate) : html`<h3 class="empty">No Items Yet</h3>`}
    </section>
`

export async function catalogView(){
    const items = await getAllItems()
    render(catalogTemplate(items))
}