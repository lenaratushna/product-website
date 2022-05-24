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

