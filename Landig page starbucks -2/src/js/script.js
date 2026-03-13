const mobileBtn = document.querySelector('.btn-mobile');
const navlinks = document.getElementById('nav-links');
const icon = document.querySelector('i');


mobileBtn.addEventListener('click', () => {
    navlinks.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    
})

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    }
    else{
        header.style.boxShadow = 'none';
    }

})



/*aqui estamos a tornar o nosso menu clicaver se clica ele aparece se clica desaparece */


