import { getAlbumById, update } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const editTemplate = (data, onEdit) => html`
    <section id="edit">
        <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value=${data.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album" .value=${data.album} />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${data.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date" .value=${data.release} />
            <input type="text" name="label" id="album-label" placeholder="Label" .value=${data.label} />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" .value=${data.sales} />

            <button type="submit">post</button>
        </form>
        </div>
    </section>
`

export async function editView(ctx){
    const id = ctx.params.id
    const data = await getAlbumById(id)

    render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({ singer, album, imageUrl, release, label, sales }){

        if(!singer || !album || !imageUrl || !release || !label || !sales){
            return alert("All fields are required!")
        }

        await update(id, { singer, album, imageUrl, release, label, sales })
        page.redirect('/catalog/' + id)

    }
}