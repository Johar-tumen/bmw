const menu = document.querySelector('.menu')
const toggler = document.querySelector('.humburger-menu')

toggler.addEventListener('click',()=>{
    menu.classList.toggle('menu-active')
})

menu.addEventListener('click',()=>{
    menu.classList.toggle('menu-active')
})
