// Функция, которая добавляет класс к элементу в зависимости от размера экрана
function addClassBasedOnScreenSize() {
    var screenWidth = window.innerWidth; // Получаем текущую ширину экрана

    var elements = document.querySelectorAll('.swiper-pagination'); // Получаем все элементы с классом 'example-element'

    // Проходим по всем элементам и проверяем их ширину экрана
    elements.forEach(function (element) {
        if (screenWidth >= 2000 && screenWidth < 2560) {
            element.classList.add('pagination-first');
            element.classList.remove('pagination-second', 'pagination-third', 'pagination-four', 'pagination-five', 'pagination-six', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 1800 && screenWidth < 2000) {
            element.classList.add('pagination-second');
            element.classList.remove('pagination-first', 'pagination-third', 'pagination-four', 'pagination-five', 'pagination-six', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 1600 && screenWidth < 1800) {
            element.classList.add('pagination-third');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-four', 'pagination-five', 'pagination-six', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 1400 && screenWidth < 1600) {
            element.classList.add('pagination-four');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-six', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 1200 && screenWidth < 1400) {
            element.classList.add('pagination-five');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-six', 'pagination-four', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 1000 && screenWidth < 1200) {
            element.classList.add('pagination-six');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-seven', 'pagination-four', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 800 && screenWidth < 1000) {
            element.classList.add('pagination-seven');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-six', 'pagination-eight', 'pagination-four', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 600 && screenWidth < 800) {
            element.classList.add('pagination-eight');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-six', 'pagination-four', 'pagination-seven', 'pagination-nine', 'pagination-ten', 'etc');
        } else if (screenWidth >= 400 && screenWidth < 600) {
            element.classList.add('pagination-nine');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-six', 'pagination-four', 'pagination-seven', 'pagination-eight', 'pagination-ten', 'etc');
        } else if (screenWidth >= 200 && screenWidth < 400) {
            element.classList.add('pagination-ten');
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-six', 'pagination-four', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'etc');
        } else {
            // Добавьте другие промежутки ширины экрана по необходимости
            element.classList.remove('pagination-first', 'pagination-second', 'pagination-third', 'pagination-five', 'pagination-four', 'pagination-six', 'pagination-seven', 'pagination-eight', 'pagination-nine', 'pagination-ten', 'etc');
        }
    });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.onload = addClassBasedOnScreenSize;
window.onresize = addClassBasedOnScreenSize;