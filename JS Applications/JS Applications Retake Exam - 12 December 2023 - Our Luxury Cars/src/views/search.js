import { searchCar } from "../data/CRUD.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../utils.js";

const searchTemplate = (onSearch, result) => html`
<section id="search">
    <div class="form">
      <h4>Search</h4>
      <form @submit=${onSearch} class="search-form">
        <input type="text" name="search" id="search-input" />
        <button class="button-list">Search</button>
      </form>
    </div>
    ${result?.length ? result.map(car => resulttemp(car)) : resulttemp()}
</section>
`

const resulttemp = (car) => html`
    <div class="search-result">

        ${!!car ? html`
        <div class="car">
            <img src=${car.imageUrl} alt="example1"/>
            <h3 class="model">${car.model}</h3>
            <a class="details-btn" href="/catalog/${car._id}">More Info</a>
        </div>` : html`<h2 class="no-avaliable">No result.</h2>`}
        <!--If there are matches display a div with information about every motorcycle-->      
    </div>

`

export function searchView(){
    render(searchTemplate(createSubmitHandler(onSearch)))
}

async function onSearch(data, form){
    if(!data.search){
        return alert("Empty")
    }

    const result = await searchCar(data.search)
    render(searchTemplate(createSubmitHandler(onSearch), result))

}