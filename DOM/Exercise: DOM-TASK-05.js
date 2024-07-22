function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    let searchInputRef = document.getElementById("searchField");
    let tableRowRef = document.querySelectorAll("tbody tr");

    function onClick() {
        let searchedText = searchInputRef.value;
        searchInputRef.value = ''

        for(let row of tableRowRef){
            let tableDataRef = row.querySelectorAll("td");
            for(let data of tableDataRef){
                debugger
            }
        }

    }
    
}
