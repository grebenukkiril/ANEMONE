let burgerBtn = document.getElementById('burger');
let headerVar = document.querySelector('header');

burgerBtn.addEventListener( 'click', () => {
    if (headerVar.classList.contains('burger-menu-active') === false){
        headerVar.classList.add('burger-menu-active') 
        document.body.style.overflow = 'hidden';
    }else{
        headerVar.classList.remove('burger-menu-active')
        document.body.style.overflow = 'scroll';
    }
});