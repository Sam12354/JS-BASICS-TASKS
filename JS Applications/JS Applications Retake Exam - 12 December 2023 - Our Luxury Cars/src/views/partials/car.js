import { html } from "../../lib.js";

export const carTemplate = (data) => html`
    <div class="car">
        <img src=${data.imageUrl} alt="example1" />
        <h3 class="model">${data.model}</h3>
        <div class="specs">
            <p class="price">Price: ${data.price}</p>
            <p class="weight">Weight: ${data.weight}</p>
            <p class="top-speed">Top Speed: ${data.speed}</p>
        </div>
        <a class="details-btn" href="/catalog/${data._id}">More Info</a>
    </div>
`