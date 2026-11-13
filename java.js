let display = document.getElementById("display");

let Abtn = document.querySelectorAll(".Abutton");

let btn = document.querySelectorAll(".button");


Abtn.forEach ((element)=>{
    console.log(element.textContent);
    element.addEventListener("click", ()=>{
        if(element.textContent === "C"){
            display.value = "";
        }
        else if(element.textContent === "DEL"){
            display.value = display.value.slice(0,-1);
        }
        else{
            display.value += element.textContent; 
        }
    })

});

btn.forEach((button)=>{
    console.log(button.textContent);
    button.addEventListener("click", ()=>{
        if(button.textContent === "="){
            result = eval(display.value);
            display.value = result;
        }
        else{
            display.value += button.textContent;
        }
    })
});

