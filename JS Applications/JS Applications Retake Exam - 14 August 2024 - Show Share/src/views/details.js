import { deleteMovie, getMovieByid } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, isOwner, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <div id="details-text">
            <p id="details-title">${data.title}</p>
            <div id="info-wrapper">
            <div id="description">
                <p id="details-description">
                    ${data.details}
                </p>
            </div>
            </div>       

            <!--Edit and Delete are only for creator-->
            ${isOwner ? html`
            <div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="#" id="delete-btn">Delete</a>
            </div>
            ` : null}

        </div>
        </div>
    </section>
`

export async function detailsView(ctx){

    const id = ctx.params.id
    const data = await getMovieByid(id)
    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId

    render(detailsTemplate(data, isOwner, onDelete))

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteMovie(id)
        page.redirect('/catalog') 

    }

}