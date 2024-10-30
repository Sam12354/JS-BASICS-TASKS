import { getitemById, update } from "../data/CRUD.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../utils.js";
import { notify } from "./notification.js";

const editTemplate = (data, onEdit) => html`
<section id="edit">
    <div class="form form-item">
      <h2>Edit Your Item</h2>
      <form @submit=${onEdit} class="edit-form">
        <input type="text" name="item" id="item" placeholder="Item" .value=${data.item}/>
        <input
          type="text"
          name="imageUrl"
          id="item-image"
          placeholder="Your item Image URL" .value=${data.imageUrl}
        />
        <input
          type="text"
          name="price"
          id="price"
          placeholder="Price in Euro" .value=${data.price}
        />
        <input
          type="text"
          name="availability"
          id="availability"
          placeholder="Availability Information" .value=${data.availability}
        />
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Item Type" .value=${data.type}
        />
        <textarea
          id="description"
          name="description"
          placeholder="More About The Item" .value=${data.description}
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
    const data = await getitemById(id)


    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit(data, formRef){

        const {item, imageUrl, price, availability, type, description} = data;
        if (!item || !imageUrl || !price || !availability || !type || !description) {
            notify('Oops');
        } else {
            await update(id, {item, imageUrl, price, availability, type, description});
            page.redirect('/catalog/' + id)
            formRef.reset();
        }

    }
    
}