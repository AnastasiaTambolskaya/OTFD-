const inputFields = document.querySelectorAll('.input-field');

inputFields.forEach(inputField => {
    inputField.addEventListener('input', () => {
        inputField.style.color = '#000'; // Насыщенный черный цвет
    });
});