document.addEventListener("DOMContentLoaded", () => {
    const targetColorDiv = document.getElementById('targetColor');
    const optionsDiv = document.getElementById('options');
    const newGameButton = document.getElementById('newGameButton');
    const message = document.getElementById('message');

    let targetColor;

    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function startNewGame() {
        optionsDiv.innerHTML = '';
        message.textContent = '';

        targetColor = generateRandomColor();
        targetColorDiv.style.backgroundColor = targetColor;

        const correctOptionIndex = Math.floor(Math.random() * 6);
        for (let i = 0; i < 6; i++) {
            const color = i === correctOptionIndex ? targetColor : generateRandomColor();
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option');
            optionDiv.style.backgroundColor = color;
            optionDiv.addEventListener('click', () => checkColor(color));
            optionsDiv.appendChild(optionDiv);
        }
    }

    function checkColor(selectedColor) {
        if (selectedColor === targetColor) {
            message.textContent = 'Correct!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Try Again!';
            message.style.color = 'red';
        }
    }

    newGameButton.addEventListener('click', startNewGame);

    startNewGame();
});