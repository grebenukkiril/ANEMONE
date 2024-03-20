const blogModalOpenBtn = document.getElementById('open-blog-modal');
const blogModalWrapper = document.getElementById('blog-modal-wrapper');
const closeBlogModal = document.getElementById('close-blog-modal');

blogModalOpenBtn.addEventListener('click', ()=>{
    blogModalWrapper.classList.add('blog-modal-active');
    document.body.style.overflow = 'hidden';
});
closeBlogModal.addEventListener( 'click' ,() => {
    blogModalWrapper.classList.remove('blog-modal-active');
    document.body.style.overflow = 'scroll';
});