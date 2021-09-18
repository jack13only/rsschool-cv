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


console.log('> Score 160 / 160')
console.log('> ---------------------------')
console.log('> Вёрстка валидная +10')
console.log('> Вёрстка семантическая +20')
console.log(' -использованы теги: H1, H2, H3, H4, H5, H6, article, figure, figcaption, footer, header, main, nav, section')
console.log('> Для оформления СV используются css-стили +10')
console.log('> Контент горизонтально центрируется на странице. Фоновый цвет во всю ширину страницы +10')
console.log('> Вёрстка адаптивная до 320px +10')
console.log('> Есть адаптивное бургер-меню +10')
console.log('> Присутствуют изображения, пропрции не искажены, есть атрибут alt +10')
console.log('> Контакты для связи и перечень навыков оформлены в виде списка ul > li +10')
console.log('> CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10')
console.log('> CV содержит пример кода с подсветкой +10')
console.log('> CV содержит изображения-ссылки на выполненные проекты с описанием +10.')
console.log('> CV выполнено на английском языке +10')
console.log('> Выполнены требования к Pull Request +10')
console.log('> Есть видеорезюме автора CV на английском языке +10')
console.log('> Дизайн, оформление, качество выполнения CV на хорошем уровне +10')
