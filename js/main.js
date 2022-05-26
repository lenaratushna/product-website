//theme
const toggleTheme = document.querySelector('.toggle-theme');

toggleTheme.addEventListener('click', () => {
    if (document.body.getAttribute('dark')) {
        document.body.removeAttribute('dark');
        localStorage.theme = 'light';
    } else {
        document.body.setAttribute('dark', 'true');
        localStorage.theme = 'dark';
    }
});

if (localStorage.theme === 'dark') {
    document.body.setAttribute('dark', 'true');
}

//menu
const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

//scroll header style
const header =  document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 15) {
        header.style.boxShadow = '0px -2px 8px rgba(0, 0, 0, 0.25)';
    } else {
        header.style.boxShadow = '';
    }
});