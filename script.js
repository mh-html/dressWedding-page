var icon = document.querySelector('.icon-list')
var list = document.querySelector('.nav-items')

icon.addEventListener('click', showMenu)

function showMenu(){
    if(icon.innerHTML=='menu'){
        list.style.left = '0'
        icon.innerHTML = 'close'
    }else{
        list.style.left = '-425px'
        icon.innerHTML = 'menu'
    }
}