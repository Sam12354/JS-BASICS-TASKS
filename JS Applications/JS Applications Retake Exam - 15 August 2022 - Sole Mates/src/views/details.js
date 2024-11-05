import { deleteItem, getItemsById } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, isOwner, hasUser, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
                <img src=${data.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
                <p>Brand: <span id="details-brand">${data.brand}</span></p>
                <p>
                    Model: <span id="details-model">${data.model}</span>
                </p>
                <p>Release date: <span id="details-release">${data.release}</span></p>
                <p>Designer: <span id="details-designer">${data.designer}</span></p>
                <p>Value: <span id="details-value">${data.value}</span></p>
            </div>

            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
            ` : null}

            <!-- Show "Details" button only if the user is logged in -->
            ${hasUser ? html`<a href="/catalog/${data._id}" id="details-btn">Details</a>` : null}
        </div>
    </section>
`

export async function detailsView(ctx){
    const id = ctx.params.id
    const data = await getItemsById(id)
    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId
    const hasUser = Boolean(userData); 

    render(detailsTemplate(data, isOwner, hasUser, onDelete))

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteItem(id)
        page.redirect('/catalog')

    }

}