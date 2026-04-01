
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

export const getSettings = (select, checkbox) => {
    const settings = JSON.parse(localStorage.getItem('setting'))
    select.value = settings.level
    checkbox.forEach((check) => {
        if(settings.category.includes(check.value)){
            check.checked = true
        }
    })
}
