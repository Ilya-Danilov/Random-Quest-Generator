const inputName = document.getElementById('name')


// Проверка на то что зарегистрирован ли пользователь
if(localStorage.getItem('AboutTheUsers') !== null){
    window.location.href = '../main/index.html'
}

// Регистрация
window.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInformation = {'name': inputName.value, 'dateRegis': new Date(), 'firstVisit': true}
    localStorage.setItem('AboutTheUsers', JSON.stringify(userInformation))
    window.location.href = '../main/index.html'
})

localStorage.setItem('setting', JSON.stringify({'level': 'easy', 'category': []}))