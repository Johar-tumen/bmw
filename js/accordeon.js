document.addEventListener('DOMContentLoaded',()=>{

    const featureLinkItems = document.querySelectorAll('.feature__link')
    const featureSubItems = document.querySelectorAll('.feature-sub')

    featureLinkItems.forEach((btn,index)=>{
        
        btn.addEventListener('click',()=>{

            if(featureLinkItems[index].classList.length == 1){
                featureLinkItems.forEach((item)=>{
                    item.classList.remove('feature__link_active')
                })
                featureSubItems.forEach((item)=>{
                    item.classList.add('hidden')
                })
            }

            featureLinkItems[index].classList.toggle('feature__link_active')
            featureSubItems[index].classList.toggle('hidden')
        })
    })

})