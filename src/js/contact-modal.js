let contactModalOpenBtn = document.querySelector('#open-contact-modal');
let contactModalWrapper = document.querySelector('#contact-modal-wrapper');
let closeContactModal = document.querySelector('#close-contact-modal');

contactModalOpenBtn.addEventListener('click', ()=>{
    contactModalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeContactModal.addEventListener( 'click' ,() => {
    contactModalWrapper.classList.remove('active');
    document.body.style.overflow = 'scroll';
});