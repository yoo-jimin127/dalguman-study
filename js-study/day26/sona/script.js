const navs = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');

function enterHandler(){
    this.classList.add('nav-hover');
    dropdownBackground.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    dropdownBackground.style.setProperty('width',`${dropdownCoords.width}px`);
    dropdownBackground.style.setProperty('height',`${dropdownCoords.height}px`);
    dropdownBackground.style.setProperty('transform',`translate(${dropdownCoords.left}px,${dropdownCoords.top}px)`);
}

function leaveHandler(){
    this.classList.remove('nav-hover');
}

navs.forEach(nav=>nav.addEventListener('mouseenter',enterHandler));
navs.forEach(nav=>nav.addEventListener('mouseleave',leaveHandler));