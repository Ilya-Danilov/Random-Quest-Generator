const inputName = document.getElementById('name')


// Проверка на то что зарегистрирован ли пользователь
if(localStorage.getItem('AboutTheUsers') !== null){
    window.location.href = '../../index.html'
}

// Регистрация
window.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInformation = {'name': inputName.value, 'dateRegis': new Date(), 'firstVisit': true, 'trueQuest': 0, 'falseQuest': 0, 'ach': []}
    localStorage.setItem('AboutTheUsers', JSON.stringify(userInformation))
    window.location.href = '../../index.html'
})

//Создание настроек по усолчанию
if(localStorage.getItem('setting') === null){
    localStorage.setItem('setting', JSON.stringify({'level': 'easy', 'category': []}))
}