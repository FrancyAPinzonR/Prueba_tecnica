const FormSignup = document.getElementById('formsignup')

let listaPersona = [];


FormSignup.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('inputName').value
    const inputLastName = document.getElementById('inputLastName').value
    const inputType = document.getElementById('inputType')
	const inputID = document.getElementById('inputID').value
	const inputBirthday = document.getElementById('inputBirthday').value
	const inputCity = document.getElementById('inputCity').value
	const inputPhone = document.getElementById('inputPhone').value
	const inputUser = document.getElementById('inputUser').value
	const inputPassword = document.getElementById('inputPassword').value


    const person = {
        nombres: inputName,
		apellidos:inputLastName,
		tipo_documento: inputType,
		documento:inputID,
		nacimiento:inputBirthday,
		ciudad_nacimiento: inputCity,
		telefono: inputPhone, 
		usuario:inputUser,
        pass: inputPassword

    }

    guardarEnStorage(person)
    // alert('Usuario registrado')
    swal("Exito", "Usuario registrado", "success");
    setTimeout(() => {
        window.location = './assest/pages/login.html'
    }, 2000)

})

const guardarEnStorage = (person) => {

    listaPersona.push(person)
    const personString = JSON.stringify(listaPersona)
    localStorage.setItem('person', personString)

}