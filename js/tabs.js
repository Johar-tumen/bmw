const tabsHandlerItems = document.querySelectorAll('[data-tabs-handler]')
const tabsFieldItems = document.querySelectorAll('[data-tabs-field]')

for(const tab of tabsHandlerItems){
    tab.addEventListener('click',()=>{
        tabsHandlerItems.forEach(item =>tab === item ? item.classList.add('design-list__item_active') : item.classList.remove('design-list__item_active'))
        tabsFieldItems.forEach(item=>tab.dataset.tabsHandler === item.dataset.tabsField ? item.classList.remove('hidden') : item.classList.add('hidden'))
    })
}
