function encodeAndDecodeMessages() {
    const msgAreaTake = document.querySelector("textarea[placeholder='Write your message here...']")
    const msgArealastMessageTake = document.querySelector("textarea[disabled][placeholder='No messages...']");
       
    const buttonsTake = document.querySelectorAll("button");
    const encodeButton = buttonsTake[0]; 
    const decodeButton = buttonsTake[1];

    function encodeMessage(){
        let msgEncode = msgAreaTake.value;
        let placeHolder = '';

        for(let i = 0; i < msgEncode.length; i++){
            // Get ASCII code of the character and add 1
            let encodedChar = String.fromCharCode(msgEncode.charCodeAt(i) + 1);
            placeHolder += encodedChar;
        }

        // Set encoded message to the receiver's textarea
        msgArealastMessageTake.value = placeHolder;

        // Clear the sender's textarea
        msgAreaTake.value = "";

    }

    function decodeMessage(){
        let msgDecode = msgArealastMessageTake.value;
        let placeHolder = '';

        for(let i = 0; i < msgDecode.length; i++){
            let decodedChar = String.fromCharCode(msgDecode.charCodeAt(i) - 1);
            placeHolder += decodedChar
        }

        msgArealastMessageTake.value = placeHolder;
        //msgArealastMessageTake.value = "";
    }

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

}