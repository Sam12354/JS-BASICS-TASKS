import { getJobById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="title"
            id="job-title"
            placeholder="Title" .value=${data.title}
            />
            <input
            type="text"
            name="imageUrl"
            id="job-logo"
            placeholder="Company logo url" .value=${data.imageUrl}
            />
            <input
            type="text"
            name="category"
            id="job-category"
            placeholder="Category" .value=${data.category}
            />
            <textarea
            id="job-description"
            name="description"
            placeholder="Description" .value=${data.description}
            rows="4"
            cols="50"
            ></textarea>
            <textarea
            id="job-requirements"
            name="requirements"
            placeholder="Requirements" .value=${data.requirements}
            rows="4"
            cols="50"
            ></textarea>
            <input
            type="text"
            name="salary"
            id="job-salary"
            placeholder="Salary" .value=${data.salary}
            />

            <button type="submit">post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){

    const id = ctx.params.id
    const data = await getJobById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ title, imageUrl, category, description, requirements, salary }){

        if(!title || !imageUrl || !category || !description || !requirements || !salary){
            return alert("All fields are required")
        }

        await update(id, { title, imageUrl, category, description, requirements, salary })
        page.redirect('/catalog/' + id)

    }

}