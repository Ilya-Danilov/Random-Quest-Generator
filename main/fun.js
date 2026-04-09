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

export const createCard = (nameQuest, descriptionQuest, containerForQuest, id) => {
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
    divDescription.classList.add('div-description');
    divDescription.style.display = 'none';
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
        if (e.target.tagName === 'BUTTON') return
        divDescription.style.display = divDescription.style.display === 'none' ? 'block' : 'none';
    })
    containerForQuest.append(cardQuestDiv)
    butProgress.addEventListener('click', () => {
        const checkStatus = JSON.parse(localStorage.getItem('activ'))
        const index = (el) => el.id === id

        if (checkStatus[checkStatus.findIndex(index)].status === undefined) {
            checkStatus[checkStatus.findIndex(index)].status = 'progress'
            localStorage.setItem('activ', JSON.stringify(checkStatus))
        }
        else{
            delete checkStatus[checkStatus.findIndex(index)].status
            localStorage.setItem('activ', JSON.stringify(checkStatus))
        }
        updateCardColor()
    })
    butDone.addEventListener('click', () => {
            const countTrueQuest = JSON.parse(localStorage.getItem('AboutTheUsers'))
            console.log(countTrueQuest)
            let countTrue = countTrueQuest.trueQuest
            console.log(countTrueQuest.trueQuest)
            countTrue++
            countTrueQuest.trueQuest = countTrue
            console.log(countTrueQuest.trueQuest)
            localStorage.setItem('AboutTheUsers', JSON.stringify(countTrueQuest))
        const arrCard = JSON.parse(localStorage.getItem('activ'))
        let card
        let count = 0
        arrCard.forEach(el => {
            if(el.id === id){
                card = el
                arrCard.splice(count, 1)
            }
            else{
                count++
            }
        })
        localStorage.setItem('activ', JSON.stringify(arrCard))
        const arrCardTo = JSON.parse(localStorage.getItem('complet'))
        arrCardTo.push(card)
        localStorage.setItem('complet', JSON.stringify(arrCardTo))
        if (localStorage.getItem('activ') !== null) {
            drawingCardQuest(containerForQuest, 'activ')
        }
    })

    butSkip.addEventListener('click', () => {
        const arrCard = JSON.parse(localStorage.getItem('activ'))
        let card
        let count = 0
        arrCard.forEach(el => {
            if(el.id === id){
                card = el
                arrCard.splice(count, 1)
            }
            else{
                count++
            }
        })
        localStorage.setItem('activ', JSON.stringify(arrCard))
        const arrCardTo = JSON.parse(localStorage.getItem('skip'))
        arrCardTo.push(card)
        localStorage.setItem('skip', JSON.stringify(arrCardTo))
        if (localStorage.getItem('activ') !== null) {
            drawingCardQuest(containerForQuest, 'activ')
        }
    })
        const updateCardColor = () => {
        const questActive = JSON.parse(localStorage.getItem('activ'))
        const currentQuest = questActive?.find(el => el.id === id)
        
        if (currentQuest?.status === 'progress') {
            cardQuestDiv.classList.add('yellow')
        } else {
            cardQuestDiv.classList.remove('yellow')
        }
    }

    updateCardColor()

}

export const drawingCardQuest = (containerForQuest, condition) => {
    containerForQuest.innerHTML = ''
    const drawingQwest = JSON.parse(localStorage.getItem(condition))
    drawingQwest.forEach(element => {
        createCard(element.title, element.description, containerForQuest, element.id)
    });
}