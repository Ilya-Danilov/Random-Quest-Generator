import * as localStorageFun from './localStorafe.js'
import * as fun from './fun.js'


//Находим нжные переменные
const greeting = document.getElementById('greeting-back')
const formLevel = document.getElementById('form-greeting')
const level = document.getElementById('complexity')
const inputCategoty = document.querySelectorAll('.category')
const createQuest = document.getElementById('get-a-quest')
const containerForQuest = document.getElementById('container-for-quest')

if (localStorage.getItem('activ') !== null) {
    fun.drawingCardQuest(containerForQuest)
}

//Если пользователь первый раз заходит вызываем приветствие
if (JSON.parse(localStorage.getItem('AboutTheUsers')).firstVisit === true) {
    greeting.style.display = 'flex'
}

//Вызываем функцию сохранения настроек и выход из настроек при нажатии на кнопку на экране приветствия
formLevel.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorageFun.firstSettings(inputCategoty, level)
    greeting.style.display = 'none'
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    dataUser.firstVisit = false
    localStorage.setItem('AboutTheUsers', JSON.stringify(dataUser))
})

createQuest.addEventListener('click', () => {
    const data = fun.sortedQuests()
    const numQuest = fun.randomQuest(0, data.length)
    const quest = data[Math.floor(numQuest)]
    const questInLocal = JSON.parse(localStorage.getItem('activ'))
    questInLocal.push(quest)
    localStorage.setItem('activ', JSON.stringify(questInLocal))
    fun.drawingCardQuest(containerForQuest)

})


