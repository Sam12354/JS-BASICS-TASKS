import { html } from "../../lib.js";

export const movieTemplate = (data) => html`
    <div class="show">
        <img src=${data.imageUrl} alt="example1" />
        <div class="show-info">
            <h3 class="title">${data.title}</h3>
            <p class="genre">Genre: ${data.genre}</p>
            <p class="country-of-origin">Country of Origin: ${data.country}</p>
            <a class="details-btn" href="/catalog/${data._id}">Details</a>
        </div>
    </div>
`