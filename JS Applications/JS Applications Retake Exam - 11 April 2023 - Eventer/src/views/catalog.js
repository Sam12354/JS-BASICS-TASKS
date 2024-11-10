import { getAllEvents } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { eventTemplate } from "./partials/event.js";

const catalogTemplate = (event) => html`
     <h2>Current Events</h2>
    <section id="dashboard">
        ${event.length ? event.map(eventTemplate) : html`<h4>No Events yet.</h4>`}
    </section>
`

export async function catalogView(){
    const events = await getAllEvents()
    render(catalogTemplate(events))
}