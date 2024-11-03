import { html } from "../../lib.js";

export const cosmitTemplate = (data) => html`
    <div class="product">
        <img src=${data.imageUrl} alt="example1" />
        <p class="title">${data.name}</p>
        <p><strong>Price:</strong><span class="price">${data.price}</span>$</p>
        <a class="details-btn" href="/catalog/${data._id}">Details</a>
    </div>
`