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



// Write the missing functionality of this user interface. The functionality is divided in the following steps: 

// Write the missing JavaScript code to make the Fitness Journey work as expected:
// All fields (Name, Email, Contact Number, Preferred Class and Class Time) are filled with the correct input.
// •	Name, Email, Contact Number, Preferred Class and Class Time are non-empty strings. If any of them is empty, the program should not do anything.

// 1.	Getting the information from the form
 
// •	On clicking the ["Next"] button the information from the input fields is listed in the "preview-section" section. For the input fields a list item is added to the "class-info" unordered list. 
// •	The text format and order for the list item should be the same as on the picture below.  
// •	When the button is clicked, the input fields must be cleared and the ["Next"] button must be disabled. At the same time the "Edit" and the "Continue" buttons must be added. 
// The HTML structure looks like this:  
 

// The functionality here is the following: 
// •	When the "Edit" button is clicked, all of the information is loaded in the input fields from step 1 and the ["Next"] button is enabled again.
 
// •	The list item must be removed from the "class-info" and all of the information must go back to the input fields again. 
 
// •	When the "Continue" button is clicked, the information from "class-info" unordered list must be transferred to "confirm-class" in the same HTML structure. For you, this means removing everything inside of the ul with class  "class-info" and adding in "confirm-class", the list item with same information and class "continue-info"   , delete "Edit" and "Continue" buttons and add new buttons "Confirm" and "Cancel" with class "confirm-btn" and "cancel-btn" .
 

// •	This is the HTML structure of "confirm-class" unordered list:
 
// •	When the "Cancel" button is clicked, the list item must be removed, from the "confirm-class", the ["Next"] button is enabled again.
 

// •	When the "Confirm" button is clicked, the <div> element with id="main" must be removed, from the body and  you must add <h1> element with id="thank-you" and text "Thank you for scheduling your appointment, we look forward to seeing you!" and  <button> with id="done-btn" and text "Done".
 

// •	On clicking the ["Done"] button you must reload the page.
