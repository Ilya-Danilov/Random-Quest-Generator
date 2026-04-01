
//Функция сохраняющая настройки
export const firstSettings = (inputCategoty, level) => {

    const setting = JSON.parse(localStorage.getItem('setting'))
    const category = []

    setting.level = level.value
    inputCategoty.forEach(checkbox => {
        if (checkbox.checked) {
            category.push(checkbox.value)
        }
    })
    setting.category = category
    localStorage.setItem('setting', JSON.stringify(setting))

}


