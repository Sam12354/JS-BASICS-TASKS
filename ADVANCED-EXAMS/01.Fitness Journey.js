window.addEventListener('load', solve);

function solve() {
    const nameInputId = document.getElementById("name");
    const emailInputId = document.getElementById("email");
    const contactNumberInputId = document.getElementById("contact-number");
    const classTypeInputId = document.getElementById("class-type");
    const classTimeInputId = document.getElementById("class-time");

    const nextButton = document.getElementById("next-btn");

    const classInfoUlElement = document.querySelector(".class-info");

    nextButton.addEventListener("click", (e) => {

        if(nameInputId.value === '' || emailInputId.value === '' || contactNumberInputId.value === '' || classTypeInputId.value === '' || classTimeInputId.value === ''){
            return;
        }

        const creatingPreviewSection = createPreviewSection(
            nameInputId.value,
            emailInputId.value, 
            contactNumberInputId.value, 
            classTypeInputId.value, 
            classTimeInputId.value, 
        );

        classInfoUlElement.appendChild(creatingPreviewSection);

        nextButton.disabled = true;

        nameInputId.value = '';
        emailInputId.value = '';
        contactNumberInputId.value = '';
        classTypeInputId.value = '';
        classTimeInputId.value = '';

    });

    function createPreviewSection(name, email, contactNum, classType, classTime) {

        const nameParagraph = document.createElement("p");
        nameParagraph.textContent = name;

        const gmailparagraph = document.createElement("p");
        gmailparagraph.textContent = email;

        const numParagraph = document.createElement("p");
        numParagraph.textContent = contactNum;

        const classTypeParagraph = document.createElement("p");
        classTypeParagraph.textContent = classType;

        const classTimeParagraph = document.createElement("p");
        classTimeParagraph.textContent = classTime;


        const articleEl = document.createElement("article");
        articleEl.classList.add("personal-info");

        articleEl.appendChild(nameParagraph);
        articleEl.appendChild(gmailparagraph);
        articleEl.appendChild(numParagraph);
        articleEl.appendChild(classTypeParagraph);
        articleEl.appendChild(classTimeParagraph);

        const editButton = document.createElement("button")
        editButton.classList.add("edit-btn");
        editButton.textContent = `Edit`;

        const continueButton = document.createElement("button")
        continueButton.classList.add("continue-btn");
        continueButton.textContent = `Continue`;

        const InfoItemListElement = document.createElement("li");
        InfoItemListElement.classList.add("info-item");

        InfoItemListElement.appendChild(articleEl);
        InfoItemListElement.appendChild(editButton);
        InfoItemListElement.appendChild(continueButton);

        editButton.addEventListener("click", (e) => {
            nameInputId.value = name
            emailInputId.value = email
            contactNumberInputId.value = contactNum
            classTypeInputId.value = classType
            classTimeInputId.value = classTime

            e.currentTarget.parentElement.remove();
            
            nextButton.disabled = false;
        });

        continueButton.addEventListener("click", (e) => {

            const nameParagraphContinue = document.createElement("p");
            nameParagraphContinue.textContent = name;
    
            const gmailparagraphContinue = document.createElement("p");
            gmailparagraphContinue.textContent = email;
    
            const numParagraphContinue = document.createElement("p");
            numParagraphContinue.textContent = contactNum;
    
            const classTypeParagraphContinue = document.createElement("p");
            classTypeParagraphContinue.textContent = classType;
    
            const classTimeParagraphContinue = document.createElement("p");
            classTimeParagraphContinue.textContent = classTime;


            const articleElContinue = document.createElement("article");
            articleElContinue.classList.add("personal-info");
    
            articleElContinue.appendChild(nameParagraphContinue);
            articleElContinue.appendChild(gmailparagraphContinue);
            articleElContinue.appendChild(numParagraphContinue);
            articleElContinue.appendChild(classTypeParagraphContinue);
            articleElContinue.appendChild(classTimeParagraphContinue);

            const cancelButton = document.createElement("button");
            cancelButton.classList.add("cancel-btn");
            cancelButton.textContent = `Cancel`;

            const confirmButton = document.createElement("button");
            confirmButton.classList.add("confirm-btn");
            confirmButton.textContent = `Confirm`;

            const InfoItemListElementContinue = document.createElement("li");
            InfoItemListElementContinue.classList.add("continue-info");

            InfoItemListElementContinue.appendChild(articleEl);
            InfoItemListElementContinue.appendChild(cancelButton);
            InfoItemListElementContinue.appendChild(confirmButton);


            const confirmClassUl = document.querySelector(".confirm-class");
            confirmClassUl.appendChild(InfoItemListElementContinue)

            e.currentTarget.parentElement.remove()

            cancelButton.addEventListener("click", (e) => {
                e.currentTarget.parentElement.remove()
                nextButton.disabled = false;
            });

            confirmButton.addEventListener("click", (e) => {

                location.reload();
                
            });

        })

        
        return InfoItemListElement;
    }
}




