export const sortedQuests = () => {
    const setting = JSON.parse(localStorage.getItem('setting'))
    const data = JSON.parse(localStorage.getItem('data'))
    const sortedData = []
    data.forEach(quest => {
        if (setting.level === 'all') {
            if (setting.category.includes(quest.category)) {
                sortedData.push(quest)
            }
        }
        else {
            if (quest.difficulty === setting.level && setting.category.includes(quest.category)) {
                sortedData.push(quest)
            }
        }
    });
    return sortedData
}

export const randomQuest = (min, max) => {
    return Math.random() * (max - min) + min
}

export const createCard = (nameQuest, descriptionQuest, containerForQuest) => {
    const containerQuest = document.createElement('div')
    containerQuest.classList.add('quest')
    const nameP = document.createElement('p')
    nameP.classList.add('quest_text')
    nameP.textContent = nameQuest
    const descriptionP = document.createElement('p')
    descriptionP.textContent = descriptionQuest
    const divNameAndBut = document.createElement('div')
    divNameAndBut.classList.add('div-name-and-but')
    const divDescription = document.createElement('div')
    divDescription.classList.add('div-description')
    const containerForBut = document.createElement('div')
    const butSkip = document.createElement('button')
    const butProgress = document.createElement('button')
    const butDone = document.createElement('button')
    const cardQuestDiv = document.createElement('div')
    cardQuestDiv.classList.add('card-quest-active', 'card-quest')
    cardQuestDiv.id = 'card-quest-active'
    containerForBut.classList.add('container-for-but')
    butSkip.classList.add('but-miss', 'quest__but')
    butProgress.classList.add('but-in-progress', 'quest__but')
    butDone.classList.add('but-done', 'quest__but')
    butDone.textContent = 'Выполнено'
    butProgress.textContent = 'Выполняю'
    butSkip.textContent = 'Пропустить'
    containerForBut.append(butSkip, butProgress, butDone);
    divNameAndBut.append(nameP, containerForBut);
    divDescription.append(descriptionP);
    cardQuestDiv.append(divNameAndBut, divDescription);
    cardQuestDiv.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') return
        divDescription.style.display = divDescription.style.display === 'none' ? 'block' : 'none'
    })
    containerForQuest.append(cardQuestDiv)

    
}

export const drawingCardQuest = (containerForQuest) => {
    containerForQuest.innerHTML = ''
    const drawingQwest = JSON.parse(localStorage.getItem('activ'))
    drawingQwest.forEach(element => {
        createCard(element.title, element.description, containerForQuest)
    });
}

