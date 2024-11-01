import { searchMotorcicle } from "../data/CRUD.js";
import { html, render } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchtemplate = (onSearch, result) => html`
<section id="search">

    <div class="form">
    <h4>Search</h4>
    <form @submit=${onSearch} class="search-form">
        <input
        type="text"
        name="search"
        id="search-input"
        />
        <button class="button-list">Search</button>
    </form>
    </div>
    <h4 id="result-heading">Results:</h4>
    
    ${result?.length ? result.map(motorcycle => resultTemplate(motorcycle)) : resultTemplate()}
</section>
`

const resultTemplate = (motorcycle) => html`
<div class="search-result">
    ${!!motorcycle ? html` 
    <div class="motorcycle">
        <img src=${motorcycle.imageUrl} alt="example1" />
        <h3 class="model">${motorcycle.model}</h3>
            <a class="details-btn" href="/catalog/${motorcycle._id}">More Info</a>
    </div>
    ` : html`<h2 class="no-avaliable">No result.</h2>`}
</div>  
`

export function searchView(){
    render(searchtemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data){

    if(!data.search){
        return alert("Empty")
    }

    const result = await searchMotorcicle(data.search)
    render(searchtemplate(createSubmitHandler(onSearch), result))
}