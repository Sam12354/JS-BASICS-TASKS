import { carsById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
<section id="edit">
    <div class="form form-auto">
      <h2>Edit Your Car</h2>
      <form @submit=${onEdit} class="edit-form">
        <input type="text" name="model" id="model" placeholder="Model" .value=${data.model} />
        <input
          type="text"
          name="imageUrl"
          id="car-image"
          placeholder="Your Car Image URL" .value=${data.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro" .value=${data.price}
        />
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Weight in Kg" .value=${data.weight}
        />
        <input
          type="text"
          name="speed"
          id="speed"
          placeholder="Top Speed in Kmh" .value=${data.speed}
        />
        <textarea
          id="about"
          name="about"
          placeholder="More About The Car" .value=${data.about}
          rows="10"
          cols="50"
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </div>
</section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await carsById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ model, imageUrl, price, weight, speed, about }){

        if(!model || !imageUrl || !price || !weight || !speed || !about){
            return alert('All fields are required!')
        }

        await update(id, {model, imageUrl, price, weight, speed, about})
        page.redirect('/catalog/' + id)

    }

}