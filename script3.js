let value = document.getElementById("count");
const increment = document.getElementsByClassName("increase")
console.log(increment);
const decrement = document.getElementsByClassName("decrease")

function increase(){
    value.innerHTML++;
}

function decrease(){
    value.innerHTML--;
}

//nicht arbeitstrudel
/* increment.addEventListener("click",function(){
        value.innerHTML++;
    }
); */


//profesorovo rjesenje
let count = 0;

document.querySelector(#increase).addEventListener("click", () => {
    changeCount(1);
});

document.querySelector(#decrease).addEventListener("click", () => {
    changeCount(-1);
});

let changeCount = (number) => {
    count+= number;
    document.querySelector("#count").textContent = count;
}

