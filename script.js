const menu = document.querySelector('.menu-start-item')
const menuList = document.querySelectorAll('.menu-item')

let interval = 50

function getMenuList() {
    menu.classList.toggle('open')
    if (menu.classList.contains('open')) {
        menu.innerHTML = 'CLOSE'
        menu.style.border = 'none'
    } else {
        menu.innerHTML = 'MENU'
        menu.style.border = '1px white solid'
    }    
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