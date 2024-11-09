import { searchMovie } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchTemplate = (onSearch, result) => html`
    <section id="search">
        <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
            <input
            type="text"
            name="search"
            id="search-input"
            />
            <button class="button-list">Search</button>
        </form>
        </div>
        <h4>Results:</h4>
        ${result?.length ? result.map(movie => resultTemp(movie)) : html`<p class="no-result">There is no TV show with this title</p>`}
    </section>
`

const resultTemp = (movie) => html`
    <div class="search-result">
        <div class="show">
            <img src=${movie.imageUrl} alt="example1" />
            <div class="show">
            <h3 class="title">${movie.title}</h3>
            <p class="genre">Genre: ${movie.genre}</p>
            <p class="country-of-origin">Country of Origin: ${movie.country}</p>
            <a class="details-btn" href="/catalog/${movie._id}">Details</a>
            </div>
        </div>
    </div>
`

export function searchView(){
    render(searchTemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data){
    if(!data.search){
        return alert("Empty")
    }

    const result = await searchMovie(data.search)
    render(searchTemplate(createSubmitHandler(onSearch), result))

}