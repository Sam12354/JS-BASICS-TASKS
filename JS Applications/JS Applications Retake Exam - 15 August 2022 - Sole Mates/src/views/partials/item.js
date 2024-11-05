import { html } from "../../lib.js";

export const itemTemplate = (data) => html`
    <li class="card">
        <img src=${data.imageUrl} alt="travis" />
        <p>
        <strong>Brand: </strong><span class="brand">${data.brand}</span>
        </p>
        <p>
        <strong>Model: </strong
        ><span class="model">${data.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
        <a class="details-btn" href="/catalog/${data._id}">Details</a>
    </li>
`