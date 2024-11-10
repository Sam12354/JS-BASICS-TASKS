import { goEvent, goEventById } from "../data/BONUS.js";
import { deleteEvent, getEventById } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, going, hasUser, hasGone, isOwner, onGoing, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
        <img id="details-img" src=${data.imageUrl} alt="example1" />
        <p id="details-title">${data.name}</p>
        <p id="details-category">
            Category: <span id="categories">${data.category}</span>
        </p>
        <p id="details-date">
            Date:<span id="date">${data.date}</span></p>
        <div id="info-wrapper">
            <div id="details-description">
            <span>${data.description}</span>
            </div>

        </div>

        <h3>Going: <span id="go">${going}</span> times.</h3>

        <!--Edit and Delete are only for creator-->
        ${hasUser ? html`
            ${isOwner ? html`
            <div id="action-buttons">
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}

            ${hasGone ? null : html`
                <div id="action-buttons">
                    <a @click=${onGoing} href="javascript:void(0)" id="go-btn">Going</a>
                </div>
            `}

            </div>
        ` : null}
        </div>
    </section>
`

export async function detailsView(ctx){
    const id = ctx.params.id

    const [data, eventInfo] = await Promise.all([
        getEventById(id),
        goEventById(id)
    ])

    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId
    const hasGone = eventInfo.hasGone || isOwner;

    render(detailsTemplate(data, eventInfo.going, Boolean(userData), hasGone, isOwner, onGoing, onDelete))

    async function onGoing(){
        await goEvent(id)

        page.redirect('/catalog/' + id)
    }

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteEvent(id)
        page.redirect('/catalog')
    }

}
