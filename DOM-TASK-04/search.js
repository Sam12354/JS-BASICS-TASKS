function search() {
    const listOfTowns = document.querySelectorAll("ul li");
    const searchedSearchTextId = document.getElementById("searchText").value.toLowerCase();
    let matches = 0;

    for(let town of listOfTowns){
        const townText = town.textContent.toLowerCase();

        if(townText.includes(searchedSearchTextId)){
            town.innerHTML = `<b><u>${townText}</u></b>`;
            matches++;
        }else{
            town.innerHTML = townText;
        }
    }
    document.getElementById("result").textContent = `${matches} matches found`
}