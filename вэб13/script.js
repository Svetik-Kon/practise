document.addEventListener('DOMContentLoaded', function () {
    const notificationContainer = document.getElementById('notification-container');
    let notificationCount = 0;

    // Функция для создания уведомления
    function createNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <span>${message}</span>
            <span class="close-btn" onclick="closeNotification(event)">X</span>
        `;
        notificationContainer.appendChild(notification);
        notificationCount++;
        updateNotificationCount();
    }

    // Функция для обновления счетчика уведомлений
    function updateNotificationCount() {
        document.getElementById('notification-count').innerText = `Уведомлений: ${notificationCount}`;
    }

    // Функция для закрытия уведомления
    window.closeNotification = function (event) {
        const notification = event.target.parentNode;
        notification.parentNode.removeChild(notification);
        notificationCount--;
        updateNotificationCount();
    };

    // Добавление примера уведомления
    createNotification('Пример уведомления 1');
    createNotification('Пример уведомления 2');
    createNotification('Пример уведомления 3');
    createNotification('Пример уведомления 4');

    // Делегирование событий для закрытия уведомлений
    notificationContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('close-btn')) {
            closeNotification(event);
        }
    });
});


