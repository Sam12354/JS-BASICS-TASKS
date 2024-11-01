import { getAllFacts } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { factTemplate } from "./partials/fact.js";

const catalogTemplate = (facts) => html`
 <h2>Fun Facts</h2>
    <section id="dashboard">
        ${facts.length ? facts.map(factTemplate) : html`<h2>No Fun Facts yet.</h2>`}
    </section>
`
export async function catalogView(){
    const facts = await getAllFacts()
    render(catalogTemplate(facts))
}