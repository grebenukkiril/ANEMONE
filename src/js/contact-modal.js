let contactModalOpenBtn = document.getElementById('open-contact-modal');
let contactModalWrapper = document.getElementById('contact-modal-wrapper');
let closeContactModal = document.getElementById('close-contact-modal');

contactModalOpenBtn.addEventListener('click', ()=>{
    contactModalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeContactModal.addEventListener( 'click' ,() => {
    contactModalWrapper.classList.remove('active');
    document.body.style.overflow = 'scroll';
});