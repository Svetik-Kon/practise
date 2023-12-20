// script.js
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let inputValue;

        // Повторяем запрос, пока не получим корректное число
        while (true) {
            inputValue = prompt('Введите число:', 0);

            // Проверяем, является ли введенное значение числом
            if (inputValue === null) {
                // Если пользователь отменил ввод, выходим из цикла
                break;
            }

            // Проверяем, содержит ли введенная строка только числа
            if (/^\d+$/.test(inputValue)) {
                inputValue = parseFloat(inputValue);
                break;
            } else {
                alert('Вы ввели некорректное значение. Введите число.');
            }
        }

        // Если inputValue равно null, значит, пользователь отменил ввод
        // Если не равно null, то прибавляем введенное значение к текущему
        if (inputValue !== null) {
            this.value += inputValue;
        }
    };
}

let cart = new Accumulator(0);

function addToCart() {
    cart.read();
    document.getElementById('cartValue').innerText = cart.value;
}
