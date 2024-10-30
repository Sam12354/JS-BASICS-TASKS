import { carsById, deleteCar } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${data.imageUrl} alt="example1" />
      <p id="details-title">${data.model}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p class="price">Price: ${data.price}</p>
          <p class="weight">Weight: ${data.weight}</p>
          <p class="top-speed">Top Speed: ${data.speed}</p>
          <p id="car-description">
            ${data.about}</p>
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
    const data = await carsById(id)
    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId

    render(detailsTemplate(data, isOwner, onDelete))

    async function onDelete(){

        const choise = confirm('Are you sure');

        if(!choise){
            return
        }

        await deleteCar(id)
        page.redirect('/catalog')
    }

}