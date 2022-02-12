const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function navHandler() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed');
    } else {
        document.body.classList.remove('fixed');
        document.body.style.paddingTop = 0;
    }
    console.log('1');
}

window.addEventListener('scroll', navHandler);