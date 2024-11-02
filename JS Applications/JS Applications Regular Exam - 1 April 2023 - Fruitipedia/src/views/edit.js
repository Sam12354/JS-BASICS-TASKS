import { getFruitsById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Fruit</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Fruit Name" .value=${data.name}
            />
            <input
            type="text"
            name="imageUrl"
            id="Fruit-image"
            placeholder="Fruit Image URL" .value=${data.imageUrl}
            />
            <textarea
            id="fruit-description"
            name="description"
            placeholder="Description" .value=${data.description}
            rows="10"
            cols="50"
            ></textarea>
            <textarea
            id="fruit-nutrition"
            name="nutrition"
            placeholder="Nutrition" .value=${data.nutrition}
            rows="10"
            cols="50"
            ></textarea>
            <button type="submit">post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){

    const id = ctx.params.id
    const data = await getFruitsById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ name, imageUrl, description, nutrition }){

        if(!name || !imageUrl || !description || !nutrition){
            return alert("All fields are required")
        }

        await update(id, { name, imageUrl, description, nutrition })
        page.redirect('/catalog/' + id)

    }

}