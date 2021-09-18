const menu = document.querySelector('.menu-start-item')
const menuList = document.querySelectorAll('.menu-item')

let interval = 50

function getMenuList() {
    menu.classList.toggle('open')
    if (menu.classList.contains('open')) {
        menu.innerHTML = 'Close'
    } else menu.innerHTML = 'Menu'
    menuList.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('hidden')
        }, index * interval)
    })
}


menu.addEventListener('click', getMenuList)

menuList.forEach(item => {
    item.addEventListener('click', getMenuList)
})