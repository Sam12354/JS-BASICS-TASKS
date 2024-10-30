import { html } from "../../lib.js"

export const itemTemplate = (data) => html`
<div class="item">
        <img src=${data.imageUrl} alt="example1" />
        <h3 class="model">${data.item}</h3>
        <div class="item-info">
            <p class="price">Price: ${data.price}</p>
            <p class="availability">
            ${data.availability}
            </p>
            <p class="type">Type: ${data.type}</p>
        </div>
        <a class="details-btn" href="/catalog/${data._id}">Uncover More</a>
</div>
`