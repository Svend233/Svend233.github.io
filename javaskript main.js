const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');

// Åpne/lukke menyen når knappen klikkes
menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

// Lukk menyen når du klikker utenfor
document.addEventListener('click', () => {
    menuList.style.display = 'none';
});
