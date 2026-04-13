import * as localStorageFun from '../localStorafe.js'

const inputCategoty = document.querySelectorAll('.category-set')
const formSettings = document.getElementById('form-setting')
const level = document.getElementById('complexity-set')
const butSettings = document.getElementById('settings')
const windowSettings = document.getElementById('window-settings')


//Открытие настроек
butSettings.addEventListener('click', () => {
    windowSettings.style.display = 'flex'
    localStorageFun.getSettings(level, inputCategoty)
})

//Сохранение настроек в локал сторедж 
formSettings.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorageFun.firstSettings(inputCategoty, level)
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    dataUser.firstVisit = false
    localStorage.setItem('AboutTheUsers', JSON.stringify(dataUser)) 
    windowSettings.style.display = 'none'
})