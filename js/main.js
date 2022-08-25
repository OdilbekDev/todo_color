elForm = document.querySelector('.form')
elInput = document.querySelector('.input')
elList = document.querySelector('.list')

const colors = ['red', 'green', 'blue', 'white', 'black', 'grey', 'orange', 'pink', 'yellow']

elForm.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(true);
    if (elInput.value != ""){
        if(colors.includes(elInput.value)){
            let newLi = document.createElement('li')
            if(elInput.value == "black"){
                newLi.textContent = elInput.value
                newLi.style.backgroundColor = elInput.value
                newLi.style.color = "white"
            }
            newLi.textContent = elInput.value
            console.log(elInput.value);
            newLi.style.backgroundColor = elInput.value
            console.log(newLi);
            elList.appendChild(newLi)
            console.log(true);
        }else{
            let newLi = document.createElement('li')
            newLi.textContent = "You did not enter right color" + " " + "Available Colors: " + " " + colors
            elList.appendChild(newLi)
        }
    }else{
        let newLi = document.createElement('li')
        newLi.textContent = "You did not enter any color"
        elList.appendChild(newLi)
    }
    elInput.value = ""
})