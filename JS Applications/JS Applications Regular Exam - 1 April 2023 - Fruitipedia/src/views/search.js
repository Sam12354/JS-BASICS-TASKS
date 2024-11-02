import { searchFruit } from "../data/CRUD.js"
import { html, render } from "../lib.js"
import { createSubmitHandler } from "../utils.js"


const searchtemplate = (onSearch, result) => html`
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
        ${renderResults(result)}
    </section>
`

// const resultTemplate = (fruit) => html`
//     <div class="search-result">

//         ${!!fruit ? html`
//             <div class="fruit">
//             <img src=${fruit.imageUrl} alt="example1" />
//             <h3 class="title">${fruit.name}</h3>
//             <p class="description">${fruit.description}</p>
//             <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
//             </div>
//         ` : html`<p class="no-result">No result.</p>`}

//         <!--If there are matches display a div with information about every fruit-->
//     </div>
// `

export function searchView(){
    render(searchtemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data){

    if(!data.search){
        return alert('Empty')
    }

    const result = await searchFruit(data.search)
    render(searchtemplate(createSubmitHandler(onSearch), result))

}

function renderResults (result){

    if(!result){
        return ''
    }else if(result.length === 0){
        return html`
        <div class="search-result">
            <p class="no-result">No result.</p>
        </div>`
    }

    return result.map(fruit => {
        return html`
            <div class="fruit">
            <img src=${fruit.imageUrl} alt="example1" />
            <h3 class="title">${fruit.name}</h3>
            <p class="description">${fruit.description}</p>
            <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
            </div>
        `
    })

}