import { getFactsById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Fact</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="category"
            id="category"
            placeholder="Category" .value=${data.category}
        />
        <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL" .value=${data.imageUrl}
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description" .value=${data.description}
        rows="10"
        cols="50"
        ></textarea>
        <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info" .value=${data.moreInfo}
        rows="10"
        cols="50"
        ></textarea>
            <button type="submit">Post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getFactsById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ category, "image-url": imageUrl, description, "additional-info": moreInfo }){

        if(!category || !imageUrl || !description || !moreInfo){
            return alert("All fields are required!")
        }

        await update(id, { category, imageUrl, description, moreInfo })
        page.redirect('/catalog/' + id)
    }

}