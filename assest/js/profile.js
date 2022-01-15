const personEnStorage = JSON.parse(localStorage.getItem('person'))
console.log(personEnStorage)
// const inputUserName = document.getElementById('inputUserame').value
const nameperson = document.getElementById('nameperson').value
console.log(nameperson.innerText)

for (let i = 0; i < personEnStorage.length; i += 1) {
    nameperson.innerText = personEnStorage[i].nombre
    console.log(nameperson)
}




const letras = document.querySelectorAll('.letra')
// console.log(letras)

const inputList = document.getElementById('inputList');

const teclado = (e) => {
    const textoTarget = e.target.innerText
    if (textoTarget == "SPACE") {
        inputList.innerHTML += "&nbsp"
    } else if (textoTarget == "DELETE") {
        inputList.innerHTML = inputList.innerText.slice(0, -1)

    } else {
        inputList.innerHTML += textoTarget
    }
}

for (let letra of letras) {
    letra.addEventListener('click', teclado)
}


const btnList = document.getElementById('btnList');

function enterList() {
    // const inputList = document.getElementById('inputList').value;
    console.log(inputList.innerText)
    const list = document.getElementById('lista');
    const itemList = document.createElement('li');
    itemList.textContent = inputList.innerText;
    list.appendChild(itemList);
    itemList.addEventListener('click', () => {
        itemList.classList.toggle('tachado');
    });
    itemList.addEventListener('dblclick', () => {
        itemList.remove();
    });
}


btnList.onclick = function () {
    enterList();

};