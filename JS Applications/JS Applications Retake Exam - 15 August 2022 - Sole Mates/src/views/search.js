import { searchItem } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { createSubmitHandler, getUserData } from "../utils.js";

const searchTemplate = (onSearch, result, hasUser) => html`
    <section id="search">
        <h2>Search by Brand</h2>

        <form @submit=${onSearch} class="search-wrapper cf">
            <input
                id="search-input"
                type="text"
                name="search"
                placeholder="Search here..."
                required
            />
            <button type="submit">Search</button>
        </form>

        <h3>Results:</h3>
        <div id="search-container">
            <ul class="card-wrapper">
                ${result && result.length > 0 
                    ? result.map(item => resultTemp(item, hasUser)) 
                    : html`<h2>There are no results found.</h2>`}
            </ul>
        </div>
    </section>
`

const resultTemp = (item, hasUser) => html`
    <li class="card">
        <img src=${item.imageUrl} alt="item image" />
        <p><strong>Brand: </strong><span class="brand">${item.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${item.model}</span></p>
        <p><strong>Value: </strong><span class="value">${item.value}</span>$</p>
        ${hasUser ? html`<a class="details-btn" href="/catalog/${item._id}">Details</a>` : ''}
    </li>
`

export function searchview(){
    render(searchTemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data){

    if(!data.search){
        return alert("Field is required!")
    }
    const userData = getUserData()
    const hasUser = Boolean(userData);

    const result = await searchItem(data.search)
    render(searchTemplate(createSubmitHandler(onSearch), result, hasUser))

}