function solve() {
    const getInputColorId = document.getElementById("colors");
    const getInputModel = document.getElementById("motorcycles");
    const getInputDateId = document.getElementById("datetime");
    const getInputNameId = document.getElementById("full-name");
    const getInputEmailId = document.getElementById("email");
    const getTestRideBtnid = document.getElementById("test-ride-btn");

    const previewUlRef = document.getElementById('preview-list');

    getTestRideBtnid.addEventListener("click", (e) => {

        const arrayInputsValues = [
            getInputColorId.value,
            getInputModel.value,
            getInputDateId.value,
            getInputNameId.value,
            getInputEmailId.value,
        ]

        if(arrayInputsValues.some(value => value === '')){
            return;
        }

        const previewElement = createPreviewList(
            getInputColorId.value,
            getInputModel.value,
            getInputDateId.value,
            getInputNameId.value,
            getInputEmailId.value,
        );
        previewUlRef.appendChild(previewElement);

        getInputColorId.value = '';
        getInputModel.value = '';
        getInputDateId.value = '';
        getInputNameId.value = '';
        getInputEmailId.value = '';

        e.currentTarget.setAttribute("disabled", "true");
    })

    function createPreviewList(color, model, datetime, fullName, email){

        const articleHeaderEl = document.createElement("p");
        articleHeaderEl.textContent = `Color: ${color}`

        const articleModelEl = document.createElement("p");
        articleModelEl.textContent = `Model: ${model}`;

        const articleForEl = document.createElement("p");
        articleForEl.textContent = `For: ${fullName}`;

        const articleContactEl = document.createElement("p");
        articleContactEl.textContent = `Contact: ${email}`;

        const articleTestRideEl = document.createElement("p");
        articleTestRideEl.textContent = `Test Ride On: ${datetime}`;

        const articleElement = document.createElement("article");
        articleElement.appendChild(articleHeaderEl);
        articleElement.appendChild(articleModelEl);
        articleElement.appendChild(articleForEl);
        articleElement.appendChild(articleContactEl);
        articleElement.appendChild(articleTestRideEl);

        const createEditButton = document.createElement("button");
        createEditButton.classList.add("edit-btn");

        const createNextButton = document.createElement("button");
        createNextButton.classList.add("next-btn");

        const liElement = document.createElement('li'); 

        liElement.appendChild(articleElement)
        liElement.appendChild(createEditButton)
        liElement.appendChild(createNextButton)

        createEditButton.addEventListener("click", (e) => {
            getInputColorId.value = color;
            getInputModel.value = model;
            getInputDateId.value = datetime;
            getInputNameId.value = fullName;
            getInputEmailId.value = email;

            e.currentTarget.parentElement.remove()
            getTestRideBtnid.removeAttribute("disabled")
        })

        createNextButton.addEventListener("click", (e) => {
            const itemToMove = e.currentTarget.parentElement.cloneNode(true);
            const completeUlRef = document.getElementById('complete-list'); 
            completeUlRef.appendChild(itemToMove);
            e.currentTarget.parentElement.remove();
        });

        const addingCompleteButton = document.createElement("button");
        addingCompleteButton.classList.add("complete-btn");
        addingCompleteButton.textContent = 'Complete'

        addingCompleteButton.addEventListener("click", (e) => {
            e.currentTarget.parentElement.remove();

            const confirmedButton = document.createElement("button");
            confirmedButton.textContent = "Your Test Ride is Confirmed";
            confirmedButton.classList.add("confirm-btn");

        })

        const yourTestRideButton = document.createElement("button");
        yourTestRideButton.classList.add("confirm-btn");
        yourTestRideButton.textContent = 'Your Test Ride is Confirmed';

        yourTestRideButton.addEventListener("click", (e) => {
            location.reload();
        });

        return liElement;
    }
}
