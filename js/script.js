document.addEventListener("DOMContentLoaded", function () {
    const targetElements = document.querySelectorAll('.part-box');

    targetElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            this.classList.add('box-hover'); // Добавление класса при наведении
        });

        element.addEventListener('mouseleave', function () {
            this.classList.remove('box-hover'); // Удаление класса при покидании
        });
    });
});
