import { html } from "../../lib.js";

export const jobTemplate = (data) => html`
    <div class="offer">
        <img src=${data.imageUrl} alt="example1" />
        <p>
            <strong>Title: </strong><span class="title">${data.title}</span>
        </p>
        <p><strong>Salary:</strong><span class="salary">${data.salary}</span></p>
        <a class="details-btn" href="/catalog/${data._id}">Details</a>
    </div>
`