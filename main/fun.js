const ach = document.getElementById('ach')

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
            let countTrue = countTrueQuest.trueQuest
            countTrue++
            countTrueQuest.trueQuest = countTrue
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
        addAch(1, './ach/bronz_zvezda.png')
        addAch(2, './ach/serebro_zvezda.webp')
        addAch(5, './ach/gold_zvezda.png')
        addAch(10, './ach/iz_zvezda.png')
        addAch(20, './ach/yx.png')
        addAch(50, './ach/kubok.png')
        addAch(100,'./ach/100.png')
    })

    butSkip.addEventListener('click', () => {
            const countFalseQuest = JSON.parse(localStorage.getItem('AboutTheUsers'))
            let countFalse = countFalseQuest.falseQuest
            countFalse++
            countFalseQuest.falseQuest = countFalse
            localStorage.setItem('AboutTheUsers', JSON.stringify(countFalseQuest))
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

const addAch = (numTrueQuest, herf) => {
    const trueQuests = JSON.parse(localStorage.getItem('AboutTheUsers')).trueQuest
    if(numTrueQuest === trueQuests){
        const bluer = document.createElement('div')
        const div = document.createElement('div')
        const h = document.createElement('h2')
        const p = document.createElement('p')
        const img = document.createElement('img')
        const but = document.createElement('button')
        h.textContent = 'Вы получили достижение'
        switch(true){
            case numTrueQuest === 1:
                p.textContent = 'Вы выполнили одно задание! Вы получили бронзовую звезду'
                break;
            case numTrueQuest === 2:
                p.textContent = 'Вы выполнили два задания! Вы получили серебрянную звезду'
                break;
            case numTrueQuest === 5:
                p.textContent = 'Вы выполнили пять заданий! Вы получили золотую звезду'
                break;
            case numTrueQuest === 10: 
                p.textContent = 'Вы выполнили десять заданий! Вы полусили изумрудную звезду'
                break;
            case numTrueQuest === 20:
                p.textContent = 'Вы выполнили целых двадцать заданий! Это сильно!'
                break;
        }
        bluer.classList.add('bluer')
        div.classList.add('containerAch')
        h.classList.add('hAboutAch')
        p.classList.add('description')
        img.setAttribute('src', herf)
        img.classList.add('imgAch')
        but.classList.add('butDel')
        but.setAttribute('id', 'burDel')
        but.textContent = 'Продолжить'
        div.append(h, p, img, but)
        bluer.append(div)
        document.body.append(bluer)
        but.addEventListener('click', () => {
            img.classList.remove('imgAch')
            img.classList.add('img-achievements')
            ach.append(img)
            bluer.remove()
        })
    }
}