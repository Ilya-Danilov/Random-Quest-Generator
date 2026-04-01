import * as localStorageFun from './localStorafe.js'


//Находим нжные переменные
const greeting = document.getElementById('greeting-back')
const formLevel = document.getElementById('form-setting')
const level = document.getElementById('complexity-set')
const inputCategoty = document.querySelectorAll('.category-set')
const formSettings = document.getElementById('form-setting')

//Если пользователь первый раз заходит вызываем приветствие
if(JSON.parse(localStorage.getItem('AboutTheUsers')).firstVisit === true){
    greeting.style.display = 'flex'
}

//Вызываем функцию сохранения настроек и выход из настроек при нажатии на кнопку
formLevel.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorageFun.firstSettings(inputCategoty, level)
    greeting.style.display = 'none'
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    dataUser.firstVisit = false
    localStorage.setItem('AboutTheUsers', JSON.stringify(dataUser))
})


