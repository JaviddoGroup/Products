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
var mySwiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    direction: 'horizontal',
    zoom: {
        enabled: true, // Включить функцию масштабирования
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    // Добавьте стрелки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Это позволит делать пагинацию кликабельной
    },
    slides: [
        '<a href="link1.html"><img src="./media/img/result1.webp" alt="">test</a>',
        '<a href="link2.html"><img src="./media/img/result2.webp" alt=""></a>',
        '<a href="link3.html"><img src="./media/img/result3.webp" alt=""></a>',
        // Добавьте другие слайды с ссылками по аналогии
    ]
});
document.addEventListener('DOMContentLoaded', function () {
    var paginationBullets = document.querySelectorAll('.swiper-slide');
    var isAutoplayStopped = false; // Переменная для отслеживания состояния автопрокрутки

    paginationBullets.forEach(function (bullet) {
        bullet.addEventListener('mouseenter', function () {
            mySwiper.autoplay.stop(); // Остановить автопрокрутку при наведении
        });

        bullet.addEventListener('mouseleave', function () {
            if (!isAutoplayStopped) {
                mySwiper.autoplay.start(); // Запустить автопрокрутку при уводе мыши, если она была остановлена
            }
        });

        bullet.addEventListener('click', function () {
            isAutoplayStopped = !isAutoplayStopped; // Инвертировать состояние переменной при клике
            if (isAutoplayStopped) {
                mySwiper.autoplay.stop(); // Остановить автопрокрутку при клике, если она не была остановлена
            } else {
                mySwiper.autoplay.start(); // Запустить автопрокрутку при клике, если она была остановлена
            }
        });
    });
});