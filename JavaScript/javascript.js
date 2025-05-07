function toggleMenu() {
    var menu = document.getElementById('dropdownMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.addEventListener('click', function(event) {
    var menu = document.getElementById('dropdownMenu');
    var button = document.querySelector('.menu-button');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});