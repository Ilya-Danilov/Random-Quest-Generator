const butProfile = document.getElementById('profile')
const windowProfile = document.getElementById('window-profile')
const exitOfPorfile = document.getElementById('exit-on-profile')

butProfile.addEventListener('click', (e) => {
    // e.defaultPrevented()
    windowProfile.style.display = 'flex'
})

exitOfPorfile.addEventListener('click', () => {
    windowProfile.style.display = 'none'
})