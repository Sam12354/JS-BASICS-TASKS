import { getAllMotorcycles } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { motorTemplate } from "./partials/motorcycle.js";

const catalogTemplate = (motors) => html`
 <h2>Available Motorcycles</h2>
<section id="dashboard">
    ${motors.length ? motors.map(motorTemplate) : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
</section>
`

export async function catalogView(){
    const allMotors = await getAllMotorcycles()
    render(catalogTemplate(allMotors))
}