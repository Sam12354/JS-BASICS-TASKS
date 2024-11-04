import { deleteAlbum, getAlbumById } from "../data/CRUD.js";
import { getLikeByAlbumId, likeAlbum } from "../data/likes.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, likes, hasUser, hasLiked, isOwner, onLike, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
            <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

        <!--Edit and Delete are only for creator-->

        <div id="action-buttons">
        ${isOwner ? html`
                <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
         : null}

        ${hasLiked ? null : html`<a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>`}

        </div>
        </div>
    </section>
`
export async function detailsView(ctx){
    const id = ctx.params.id

    const [data, likesInfo] = await Promise.all([
        getAlbumById(id),
        getLikeByAlbumId(id)
    ]);

    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId
    const hasLiked = likesInfo.hasLiked || isOwner;
 
    render(detailsTemplate(data, likesInfo.likes, Boolean(userData), hasLiked, isOwner, onLike, onDelete))

    async function onLike(){
        await likeAlbum(id)

        page.redirect('/catalog/' + id)
    }

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteAlbum(id)
        page.redirect('/catalog')

    }

}