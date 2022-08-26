elForm = document.querySelector('.form')
elInput = document.querySelector('.input')
elList = document.querySelector('.list')

const colors = ['red', 'green', 'blue', 'white', 'black', 'grey', 'orange', 'pink', 'yellow']

elForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let result = elInput.value.toLowerCase()
    console.log(result);
    if (result != ""){
        if(colors.includes(result)){
            let newLi = document.createElement('li')
            if(result == "black"){
                newLi.textContent = result
                newLi.style.backgroundColor = result
                newLi.style.color = "white"
            }
            newLi.textContent = result
            console.log(result);
            newLi.style.backgroundColor = result
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