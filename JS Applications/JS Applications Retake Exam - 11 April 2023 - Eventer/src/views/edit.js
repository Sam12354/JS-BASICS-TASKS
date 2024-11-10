import { getEventById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Event</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Event" .value=${data.name}
            />
            <input
            type="text"
            name="imageUrl"
            id="event-image"
            placeholder="Event Image" .value=${data.imageUrl}
            />
            <input
            type="text"
            name="category"
            id="event-category"
            placeholder="Category" .value=${data.category}
            />


            <textarea
            id="event-description"
            name="description"
            placeholder="Description" .value=${data.description}
            rows="5"
            cols="50"
            ></textarea>
            
            <label for="date-and-time">Event Time:</label>
            <input
            type="text"
            name="date"
            id="date"
            placeholder="When?" .value=${data.date}
        />

            <button type="submit">Edit</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getEventById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ name, imageUrl, category, description, date }){

        if(!name || !imageUrl || !category || !description || !date){
            return alert("All fields are required")
        }

        await update(id, { name, imageUrl, category, description, date })
        page.redirect('/catalog/' + id)

    }

}