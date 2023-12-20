document.addEventListener('DOMContentLoaded', function () {
    const parallaxContainer = document.getElementById('parallax');

    window.addEventListener('scroll', function () {
        // Получаем значение прокрутки страницы
        const scrollY = window.scrollY;

        // Настраиваем коэффициент параллакса по вашему усмотрению
        const parallaxFactor = 0.5;

        // Применяем стили для создания эффекта параллакса
        parallaxContainer.style.backgroundPositionY = `${-scrollY * parallaxFactor}px`;
    });
});
