const myInput = document.querySelector("#aj_di")
const myText = document.querySelector("#paragrawww")

const losowaLiczba = Math.floor(Math.random() * 100)

function handleInput(){
    const zgadnietaLiczba = myInput.value
    
    if (zgadnietaLiczba > losowaLiczba ){
        myText.innerHTML = "za dusza, daj mniejszom"
    } else if (zgadnietaLiczba < losowaLiczba ){
        myText.innerHTML = "za maua, daj wienkszom"
    } else if (zgadnietaLiczba == losowaLiczba ){
        myText.innerHTML = "holibka"
    }
}

myInput.addEventListener("change", handleInput);