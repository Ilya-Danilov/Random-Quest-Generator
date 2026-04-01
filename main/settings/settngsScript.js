import * as localStorageFun from '../localStorafe.js'

const inputCategoty = document.querySelectorAll('.category-set')
const formSettings = document.getElementById('form-setting')
const level = document.getElementById('complexity-set')
const butSettings = document.getElementById('settings')
const windowSettings = document.getElementById('window-settings')



butSettings.addEventListener('click', () => {
    windowSettings.style.display = 'flex'
    
})

//Сохранение настроек в локал сторедж 
formSettings.addEventListener('submit', () => {
    localStorageFun.firstSettings(inputCategoty, level)
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    dataUser.firstVisit = false
    localStorage.setItem('AboutTheUsers', JSON.stringify(dataUser)) 
    windowSettings.style.display = 'none'
})