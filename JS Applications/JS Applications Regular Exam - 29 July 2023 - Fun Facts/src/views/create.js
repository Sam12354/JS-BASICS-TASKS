import { addFact } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const createTemplate = (onCreate) => html`
 <section id="create">
    <div class="form">
      <h2>Add Fact</h2>
      <form @submit=${onCreate} class="create-form">
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
      ></textarea>
        <button type="submit">Add Fact</button>
      </form>
    </div>
</section>
`

export function createView(){
    render(createTemplate(createSubmitHandler(onCreate)))
}

async function onCreate({ category, "image-url": image, description, "additional-info": additionalInfo }){

    if(!category || !image || !description || !additionalInfo){
        return alert("All fields are required!")
    }

    await addFact(category, image, description, additionalInfo)

    page.redirect('/catalog')

}