import { getItemsById, update } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="brand"
            id="shoe-brand"
            placeholder="Brand" .value=${data.brand}
            />
            <input
            type="text"
            name="model"
            id="shoe-model"
            placeholder="Model" .value=${data.model}
            />
            <input
            type="text"
            name="imageUrl"
            id="shoe-img"
            placeholder="Image url" .value=${data.imageUrl}
            />
            <input
            type="text"
            name="release"
            id="shoe-release"
            placeholder="Release date" .value=${data.release}
            />
            <input
            type="text"
            name="designer"
            id="shoe-designer"
            placeholder="Designer" .value=${data.designer}
            />
            <input
            type="text"
            name="value"
            id="shoe-value"
            placeholder="Value" .value=${data.value}
            />

            <button type="submit">post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getItemsById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ brand, model, imageUrl, release, designer, value }){

        if(!brand || !model || !imageUrl || !release || !designer || !value){
            return alert("All fields are required!")
        }

        await update(id, { brand, model, imageUrl, release, designer, value })
        page.redirect('/catalog/' + id)

    }
}