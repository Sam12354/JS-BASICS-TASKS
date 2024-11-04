import { html } from "../../lib.js";

export const albumTemplate = (data) => html`
    <li class="card">
        <img src=${data.imageUrl} alt="travis" />
        <p>
        <strong>Singer/Band: </strong><span class="singer">${data.singer}</span>
        </p>
        <p>
        <strong>Album name: </strong><span class="album">${data.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${data.sales}</span></p>
        <a class="details-btn" href="/catalog/${data._id}">Details</a>
    </li>
`