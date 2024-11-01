import { html } from "../../lib.js";

export const motorTemplate = (data) => html`
    <div class="motorcycle">
        <img src=${data.imageUrl} alt="example1" />
        <h3 class="model">${data.model}</h3>
        <p class="year">Year: ${data.year}</p>
        <p class="mileage">Mileage: ${data.mileage}</p>
        <p class="contact">Contact Number: ${data.contact}</p>
        <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>
`
