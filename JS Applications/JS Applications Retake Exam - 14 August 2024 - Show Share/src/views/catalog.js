import { getAllMovies } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { movieTemplate } from "./partials/movie.js";

const catalogTemplate = (movie) => html`
    <h2>Users Recommendations</h2>
    <section id="shows">
        ${movie.length ? movie.map(movieTemplate) : html` <h2 id="no-show">No shows Added.</h2>`}
    </section>
`

export async function catalogView(){
    const movies = await getAllMovies()
    render(catalogTemplate(movies))
}