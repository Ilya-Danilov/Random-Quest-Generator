import * as localStorageFun from './localStorafe.js'


//Находим нжные переменные
const greeting = document.getElementById('greeting-back')
const formLevel = document.getElementById('form-greeting')
const level = document.getElementById('complexity')
const inputCategoty = document.querySelectorAll('.category')

//Если пользователь первый раз заходит вызываем приветствие
if(JSON.parse(localStorage.getItem('AboutTheUsers')).firstVisit === true){
    greeting.style.display = 'flex'
}

//Вызываем функцию сохранения настроек при нажатии на кнопку сохранения
formLevel.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorageFun.firstSettings(inputCategoty, level)
    greeting.style.display = 'none'
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    dataUser.firstVisit = false
    localStorage.setItem('AboutTheUsers', JSON.stringify(dataUser))
})

