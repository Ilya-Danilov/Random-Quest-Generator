const butProfile = document.getElementById('profile')
const windowProfile = document.getElementById('window-profile')
const exitOfPorfile = document.getElementById('exit-on-profile')
const userName = document.getElementById('name-profile')
const dateRegis = document.getElementById('date-regis')
const pracent = document.getElementById('pracent')
const achievements = document.getElementById('ach')


//Открываем профиль
butProfile.addEventListener('click', (e) => {
    // e.defaultPrevented()
    windowProfile.style.display = 'flex'
    const dataUser = JSON.parse(localStorage.getItem('AboutTheUsers'))
    pracent.textContent = `${(dataUser.trueQuest / dataUser.falseQuest).toFixed(2)}`
    const dataUserAch = JSON.parse(localStorage.getItem('AboutTheUsers'))
    achievements.innerHTML = ''

    console.log(dataUserAch.ach)
dataUserAch.ach.forEach(element => {
    const img = document.createElement('img')
    img.classList.add('achImg')
    switch(true){
        
        case element === 1:
            img.setAttribute('src', 'ach/bronz_zvezda.png')
            achievements.append(img)
            break;
        case element === 2:
            img.setAttribute('src', 'ach/serebro_zvezda.webp')
            achievements.append(img)
            break;
        case element === 5:
            img.setAttribute('src', 'ach/gold_zvezda.png')
            achievements.append(img)
            break;
        case element === 10:
            img.setAttribute('src', 'ach/iz_zvezda.png')
            achievements.append(img)
            break;
        case element === 20:
            img.setAttribute('src', 'ach/yx.png')
            achievements.append(img)
            break;
        case element === 50:
            img.setAttribute('src', 'ach/kubok.png')
            achievements.append(img)
            break;
        case element === 100:
            img.setAttribute('src', 'ach/100.png')
            achievements.append(img)
            break;
    }
});
})


//Закрываем профиль
exitOfPorfile.addEventListener('click', () => {
    windowProfile.style.display = 'none'
})


// Добавляем в профиль имя и дату
userName.textContent = JSON.parse(localStorage.getItem('AboutTheUsers')).name
dateRegis.textContent = `Дата регистрации: ${new Date(JSON.parse(localStorage.getItem('AboutTheUsers')).dateRegis).toLocaleDateString('ru-RU')}`


//Достижения
