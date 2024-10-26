import { deleteSolution, getSolutionById } from "../data/CRUD.js";
import { getLikeBySolutionid, likeSolution } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img
            id="details-img"
            src=${data.imageUrl}
            alt="example1"
        />
        <div>
            <p id="details-type">${data.type}</p>
            <div id="info-wrapper">
            <div id="details-description">
                <p id="description">
                ${data.description}
                </p>
                <p id="more-info">
                ${data.learnMore}
                </p>
            </div>
            </div>
            <h3>Like Solution:<span id="like">${likes}</span></h3>

            <!--Edit and Delete are only for creator-->

        ${hasUser ? html`
        
            ${isOwner ? html `
                <div id="action-buttons">
                    <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>`
            : null}

            ${hasLiked ? null : html`
                <div id="action-buttons"> 
                    <!--Bonus - Only for logged-in users ( not authors )-->
                    <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
                </div>
            `}

            ` : null}
        </div>
    </div>

</section>
`

export async function detailsView(ctx){
    const id = ctx.params.id
    const [data, likesInfo] = await Promise.all([
        getSolutionById(id),
        getLikeBySolutionid(id)
    ])

    const userData = getUserData()
    const isOwner = userData?._id === data._ownerId
    const hasLiked = likesInfo.hasLiked || isOwner;

    render(detailsTemplate(data, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete))

    async function onLike(){
        await likeSolution(id)
        page.redirect('/catalog/' + id)
    }

    async function onDelete(){
        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteSolution(id)
        page.redirect('/catalog')
    }
}