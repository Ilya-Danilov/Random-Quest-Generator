const inputName = document.getElementById('name')

if(localStorage.getItem('AboutTheUsers') !== null){
    window.location.href = '../main/index.html'
}

window.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInformation = {'name': inputName.value, 'dateRegis': new Date()}
    localStorage.setItem('AboutTheUsers', JSON.stringify(userInformation))
    window.location.href = '../main/index.html'
})