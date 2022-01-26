"use strict";
function changeColor() {
    const hexNumbers =
        [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
        ];


let hexCode = String(); //alternative declaration is typing hexCode=""

for(let i = 0; i <6;i++){
    const randomIndex = Math.floor(Math.random() * hexNumbers.length) //Math.floor truncatea decimalno mjesto (obriše ga)
    hexCode += hexNumbers[randomIndex];
}

document.getElementById("hex-code").innerHTML = hexCode;
document.body.style.backgroundColor = "#" + hexCode;
}

//Whenever editing a CSS class whose name is defined using a "-" symbol,
//you must use camelCase to substitute the dash in JavaScript Syntax