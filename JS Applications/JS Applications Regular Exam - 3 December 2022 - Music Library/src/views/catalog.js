import { getAllAlbums } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { albumTemplate } from "./partials/album.js";

const catalogTemplate = (album) => html`
    <section id="dashboard">
        <h2>Albums</h2>
        <!-- Display a li with information about every post (if any)-->
        ${album.length ? album.map(albumTemplate) : html`<h2>There are no albums added yet.</h2>`}
    </section>
`

export async function catalogView(){
    const albums = await getAllAlbums()
    render(catalogTemplate(albums))
}

