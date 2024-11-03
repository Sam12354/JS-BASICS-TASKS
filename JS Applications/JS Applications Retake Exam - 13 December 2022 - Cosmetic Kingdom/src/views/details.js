import { deleteCosmetic, getCosmeticById } from "../data/CRUD.js";
import { buyProduct, buyerId } from "../data/buys.js";
import { html, render, page } from "../lib.js";
import { getUserData } from "../utils.js";

const detailsTemplate = (data, buys, hasUser, hasBought, isOwner, onBought, onDelete) => html`
    <section id="details">
        <div id="details-wrapper">
            <img
                id="details-img"
                src=${data.imageUrl}
                alt="example1"
            />
            <p id="details-title">${data.name}</p>
            <p id="details-category">
                Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-price">
                Price: <span id="price-number">${data.price}</span>$
            </p>
            <div id="info-wrapper">
                <div id="details-description">
                    <h4>Bought: <span id="buys">${buys}</span> times.</h4>
                    <span>${data.description}</span>
                </div>
            </div>

            <!-- Action buttons for logged-in users -->
            ${hasUser ? html`
                <div id="action-buttons">
                    <!-- Edit and Delete are only for the owner -->
                    ${isOwner ? html`
                        <a href="/edit/${data._id}" id="edit-btn">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                    ` : null}

                    <!-- Buy button visible only for non-owners who haven't bought yet -->
                    ${!isOwner && !hasBought ? html`
                        <a @click=${onBought} href="javascript:void(0)" id="buy-btn">Buy</a>
                    ` : null}
                </div>
            ` : null}
        </div>
    </section>
`;

export async function detailsView(ctx){
    const id = ctx.params.id 
    const [data, buysInfo] = await Promise.all([
        getCosmeticById(id),
        buyerId(id)
    ])
    const userData = getUserData()

    const isOwner = userData?._id == data._ownerId
    const hasBought = buysInfo.hasBought || isOwner

    render(detailsTemplate(data, buysInfo.buys, Boolean(userData), hasBought ,isOwner, onBought, onDelete))

    async function onBought(){
        await buyProduct(id)
        page.redirect('/catalog/' + id)
    }

    async function onDelete(){

        const choice = confirm("Are you sure?")

        if(!choice){
            return
        }

        await deleteCosmetic(id)
        page.redirect('/catalog')

    }

}