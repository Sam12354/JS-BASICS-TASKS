import { html, render, page } from "../lib.js";
import { deleteMotorcycle, getMotorcycleById } from "../data/CRUD.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="year">Year: ${data.year}</p>
          <p class="mileage">Mileage: ${data.mileage}</p>
          <p class="contact">Contact Number: ${data.contact}</p>
             <p id = "motorcycle-description">
              ${data.about}
                </p>
        </div>
         <!--Edit and Delete are only for creator-->
         ${isOwner ? html`
         <div id="action-buttons">
           <a href="/edit/${data._id}" id="edit-btn">Edit</a>
           <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
         </div>
         ` : null}
      </div>
  </div>
</section>
`

export async function detailsView(ctx){
    const id = ctx.params.id;
    const data = await getMotorcycleById(id)
    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId

    render(detailsTemplate(data, isOwner, onDelete))

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteMotorcycle(id)
        page.redirect('/catalog')

    }

}
