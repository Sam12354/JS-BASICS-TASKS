import { html } from "../../lib.js";

export const fruitTemplate = (data) => html`
    <div class="fruit">
        <img src=${data.imageUrl} alt="example1" />
        <h3 class="title">${data.name}</h3>
        <p class="description">${data.description}</p>
        <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>
`