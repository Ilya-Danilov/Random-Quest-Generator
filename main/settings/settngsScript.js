const butSettings = document.getElementById('settings')
const windowSettings = document.getElementById('window-settings')
const exitOfSettings = document.getElementById('exit-on-settings')

butSettings.addEventListener('click', () => {
    windowSettings.style.display = 'flex'
})

exitOfSettings.addEventListener('click', () => {
    windowSettings.style.display = 'none'
})