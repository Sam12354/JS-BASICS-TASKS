function toggle() {
    const getButtonClassCollection = document.getElementsByClassName("button")[0];
    const extraIdTake = document.getElementById("extra");

    if(extraIdTake.style.display === 'none'){
        extraIdTake.style.display = 'block'
        getButtonClassCollection.textContent = 'Less';
    }else{
        extraIdTake.style.display = 'none'
        getButtonClassCollection.textContent = 'More';
    }

}
