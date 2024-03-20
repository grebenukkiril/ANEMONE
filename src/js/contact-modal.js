const contactModalOpenBtn = document.getElementById('open-contact-modal');
const contactModalWrapper = document.getElementById('contact-modal-wrapper');
const closeContactModal = document.getElementById('close-contact-modal');

contactModalOpenBtn.addEventListener('click', ()=>{
    contactModalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closeContactModal.addEventListener( 'click' ,() => {
    contactModalWrapper.classList.remove('active');
    document.body.style.overflow = 'scroll';
});