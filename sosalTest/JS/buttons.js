const checkbox = document.getElementById('checkbox');
const continueButton = document.getElementById('continueButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');

// Активация кнопки при нажатии на чекбокс
checkbox.addEventListener('change', function() {
    continueButton.disabled = !checkbox.checked;
});

// Открытие модального окна при нажатии на кнопку
continueButton.addEventListener('click', function() {
    modal.style.display = 'block';
	checkbox.checked = false;
	continueButton.disabled = !checkbox.checked;
});

// Закрытие модального окна при нажатии на крестик
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});