import { html } from "../../lib.js";

export const eventTemplate = (data) => html`
    <div class="event">
        <img src=${data.imageUrl} alt="example1" />
        <p class="title">
            ${data.name}
        </p>
        <p class="date">${data.date}</p>
        <a class="details-btn" href="/catalog/${data._id}">Details</a>
    </div>
`