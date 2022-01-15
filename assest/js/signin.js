const FormSignIn = document.getElementById('formsignin')


FormSignIn.addEventListener('submit', (e) => {
    e.preventDefault()

    personGuardadoEnStorage()

})

const personGuardadoEnStorage = () => {
    const personEnStorage = JSON.parse(localStorage.getItem('person'))
    const inputLoginEmail = document.getElementById('inputUser')
    const inputLoginPass = document.getElementById('inputPassword').value
    console.log(inputLoginEmail)
    console.log(inputLoginPass)
    console.log(personEnStorage)
    for (let i = 0; i < personEnStorage.length; i += 1) {
        if (inputLoginEmail == personEnStorage[i].email && inputLoginPass == personEnStorage[i].pass) {
			console.log("Bienvenido")
            swal("Exito", "Bienvenido", "success");
            setTimeout(() => {
                window.location = 'profile.html'
            }, 2000)

        } else {
            swal("Error", "Verifique sus datos o registrate", "error");
        }
    }

}
// personGuardadosEnStorage()