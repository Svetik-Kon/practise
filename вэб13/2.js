document.addEventListener('DOMContentLoaded', function () {
    const contentElement = document.getElementById('content');
    const wrapperElement = document.getElementById('wrapper');

    window.addEventListener('scroll', function () {
        // Получаем значение прокрутки страницы
        const scrollY = window.scrollY;

        // Проверяем текущее положение прокрутки
        if (scrollY > 100) {
            // Если прокрутка больше 100 пикселей, обновляем содержимое и фон
            contentElement.textContent = 'Новое содержимое страницы';
            contentElement.classList.add('new-content');
            wrapperElement.style.height = '100%'; // Растягиваем wrapper на весь экран
        } else {
            // В противном случае возвращаем изначальное содержимое и фон
            contentElement.textContent = 'Содержимое страницы';
            contentElement.classList.remove('new-content');
            wrapperElement.style.height = '100vh'; // Возвращаем высоту wrapper на высоту окна просмотра
        }
    });
});
