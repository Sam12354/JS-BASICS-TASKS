import { getAllTattoos } from "../data/tattooCRUD.js";
import { html, render } from "../lib.js";
import { tattooTemplate } from "./partials/tattoo.js";

const catalogTemplate = (tattoos) => html`
    <h2>Collection</h2>
<section id="tattoos">
    ${tattoos.length ? tattoos.map(tattooTemplate) : html`<h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
</section>
`

export async function catalogView(){
    const tattoes = await getAllTattoos()
    render(catalogTemplate(tattoes))
}
