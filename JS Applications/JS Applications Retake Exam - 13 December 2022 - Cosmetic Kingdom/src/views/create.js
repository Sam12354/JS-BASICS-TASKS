import { createCosmetic } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onCreate) => html`
    <section id="create">
        <div class="form">
        <h2>Add Product</h2>
        <form @submit=${onCreate} class="create-form">
            <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            />
            <input
            type="text"
            name="imageUrl"
            id="product-image"
            placeholder="Product Image"
            />
            <input
            type="text"
            name="category"
            id="product-category"
            placeholder="Category"
            />
            <textarea
            id="product-description"
            name="description"
            placeholder="Description"
            rows="5"
            cols="50"
            ></textarea>

            <input
            type="text"
            name="price"
            id="product-price"
            placeholder="Price"
            />

            <button type="submit">Add</button>
        </form>
        </div>
    </section>
`

export function createView(){
    render(createTemplate(createSubmitHandler(onCreate)))
}

async function onCreate({ name, imageUrl, category, description, price }){

    if(!name || !imageUrl || !category || !description || !price){
        return alert("All fields are required!")
    }

    await createCosmetic(name, imageUrl, category, description, price)
    page.redirect('/catalog')

}