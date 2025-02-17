const checkbox = document.getElementById('checkbox');
const continueButton = document.getElementById('continueButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close');
const closeButtonYes = document.querySelector('.closeFooter');
const NoSosalB = document.querySelector('.noFooter');
const resultText = document.querySelector('.proof');
const video = document.querySelector('.proofVideo');

document.getElementById('proofVideoId').volume = 0.35;

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

closeButtonYes.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
	const resultText = document.querySelector('.result');
	resultText.textContent = 'Вы победили!';
});

NoSosalB.addEventListener('click', function() {
    resultText.style.display = 'block';
	if (NoSosalB.textContent === 'ㅤㅤЯ ТОЧНО не сосал!') {
        video.style.display = 'block';
		NoSosalB.style.display = 'none';
		closeButtonYes.textContent = 'Признаю, я сосал!';
    }
	NoSosalB.textContent = 'ㅤㅤЯ ТОЧНО не сосал!';
});