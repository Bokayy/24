"use strict"

const messageinput = document.getElementById('message-input');

function getMessage(){
    messageinput.innerHTML = messageinput.value;
    messageinput.value = String();
}

messageinput.addEventListener("keydown", function(event) {
    if(event.key === "Enter"){
    getMessage();        
    }
});

function getMessage(){
    document.getElementById("message-output").value = messageinput.value;
    messageinput.value = String();
}

