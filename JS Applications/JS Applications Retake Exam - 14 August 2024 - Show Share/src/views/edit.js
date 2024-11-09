import { getMovieByid, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Show</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="title"
            id="title"
            placeholder="TV Show title" .value=${data.title}
            />
            <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL" .value=${data.imageUrl}
            />
            <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre" .value=${data.genre}
        />
        <input
        type="text"
        name="country"
        id="country"
        placeholder="Country" .value=${data.country}
        />
            <textarea
            id="details"
            name="details"
            placeholder="Details" .value=${data.details}
            rows="2"
            cols="10"
            ></textarea>
            <button type="submit">Edit Show</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getMovieByid(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ title, "image-url": imageUrl, genre, country, details }){

        if(!title || !imageUrl || !genre || !country || !details){
            return alert("All fields are required!")
        }

        await update(id, { title, imageUrl, genre, country, details })
        page.redirect('/catalog/' + id)

    }
}