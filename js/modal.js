const modalView = document.querySelector('.modal')
const moreBtn = document.querySelectorAll('.more')

modalView.addEventListener('click',(e)=>{
    if(e.target.classList.contains('overlay')||e.target.classList.contains('modal__close')){
        modalView.classList.toggle('hidden')
    }
})

moreBtn.forEach(btn => {
    btn.addEventListener('click',()=>{
        modalView.classList.toggle('hidden')
    })
});