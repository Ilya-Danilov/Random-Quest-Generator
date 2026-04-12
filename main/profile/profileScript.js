const butProfile = document.getElementById('profile')
const windowProfile = document.getElementById('window-profile')
const exitOfPorfile = document.getElementById('exit-on-profile')
const userName = document.getElementById('name-profile')
const dateRegis = document.getElementById('date-regis')
const pracent = document.getElementById('pracent')


//Открываем профиль
butProfile.addEventListener('click', (e) => {
    // e.defaultPrevented()
    windowProfile.style.display = 'flex'
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    pracent.textContent = `${(dataUser.trueQuest / dataUser.falseQuest).toFixed(2)}`
})


//Закрываем профиль
exitOfPorfile.addEventListener('click', () => {
    windowProfile.style.display = 'none'
})


// Добавляем в профиль имя и дату
userName.textContent = JSON.parse(localStorage.getItem('AboutTheUsers')).name
dateRegis.textContent = `Дата регистрации: ${new Date(JSON.parse(localStorage.getItem('AboutTheUsers')).dateRegis).toLocaleDateString('ru-RU')}`