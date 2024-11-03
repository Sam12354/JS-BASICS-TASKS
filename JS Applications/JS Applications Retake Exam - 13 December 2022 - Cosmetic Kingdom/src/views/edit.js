import { getCosmeticById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Product</h2>
        <form @submit=${onEdit} class="edit-form">
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name" .value=${data.name}
            />
            <input
            type="text"
            name="imageUrl"
            id="product-image"
            placeholder="Product Image" .value=${data.imageUrl}
            />
            <input
            type="text"
            name="category"
            id="product-category"
            placeholder="Category" .value=${data.category}
            />
            <textarea
            id="product-description"
            name="description"
            placeholder="Description" .value=${data.description}
            rows="5"
            cols="50"
            ></textarea>

            <input
            type="text"
            name="price"
            id="product-price"
            placeholder="Price" .value=${data.price}
            />
            <button type="submit">post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getCosmeticById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ name, imageUrl, category, description, price }){

        if(!name || !imageUrl || !category || !description || !price){
            return alert("All fields are required!")
        }

        await update(id, {name, imageUrl, category, description, price})
        page.redirect('/catalog/' + id)

    }

}