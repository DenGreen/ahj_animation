const collapseBtn = document.querySelector('.collapse__btn');
const collapseCont = document.querySelector('.collapse__cont');

collapseBtn.addEventListener('click', () => {
    if(collapseCont.classList.contains('open')) {
        collapseCont.classList.remove('open');
        collapseCont.style.height = 0;
        return;
    }
    collapseCont.style.height = '200px';
    collapseCont.classList.add('open');
    
})