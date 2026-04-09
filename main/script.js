import * as localStorageFun from './localStorafe.js'
import * as fun from './fun.js'


//Находим нжные переменные
const greeting = document.getElementById('greeting-back')
const formLevel = document.getElementById('form-greeting')
const level = document.getElementById('complexity')
const inputCategoty = document.querySelectorAll('.category')
const createQuest = document.getElementById('get-a-quest')
const containerForQuest = document.getElementById('container-for-quest')
const butDoneQuests = document.getElementById('but-fo-done-cards')
const butActivQuests = document.getElementById('but-for-current-cards')
const butScipQuests = document.getElementById('but-for-skip-cards')

if (localStorage.getItem('activ') !== null) {
    fun.drawingCardQuest(containerForQuest, 'activ')
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
    if(data.length !== 0){
    const numQuest = fun.randomQuest(0, data.length)
    const quest = data[Math.floor(numQuest)]
    const redactData = JSON.parse(localStorage.getItem('data'))
    const index = (el) => el.id === quest.id
    const del = redactData.findIndex(index)
    redactData.splice(del, 1)
    localStorage.setItem('data', JSON.stringify(redactData))
    const questInLocal = JSON.parse(localStorage.getItem('activ'))
    questInLocal.push(quest)
    localStorage.setItem('activ', JSON.stringify(questInLocal))
    fun.drawingCardQuest(containerForQuest, 'activ')
    }
    else{
        alert('База квестов прилегла отдохнуть, либо они закончились либо что то пошло не так. Попробуйте поменять настройки')
    }

})

butDoneQuests.addEventListener('click', () => {
    fun.drawingCardQuest(containerForQuest, 'complet')
    const butQuestCondition = document.querySelectorAll('.container-for-but')
    const questCard = document.querySelectorAll('.card-quest')
    butQuestCondition.forEach(el => {
        el.remove()
    })
    questCard.forEach(el => {
        el.classList.add('green')
    })
})

butActivQuests.addEventListener('click', () => {
    fun.drawingCardQuest(containerForQuest, 'activ')
})

butScipQuests.addEventListener('click', () => {
    fun.drawingCardQuest(containerForQuest, 'skip')
    const butQuestCondition = document.querySelectorAll('.container-for-but')
    const questCard = document.querySelectorAll('.card-quest')
    butQuestCondition.forEach(el => {
        el.remove()
    })
    questCard.forEach(el => {
        el.classList.add('red')
    })
})