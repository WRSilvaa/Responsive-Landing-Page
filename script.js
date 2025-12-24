const button = document.querySelector('.toggle-btn');
const instructions = document.querySelector('.instructions');

button.addEventListener('click', () => {
    const isHidden = instructions.classList.toggle('hidden');

    instructions.setAttribute('aria-hidden', isHidden);
    button.setAttribute('aria-expanded', !isHidden);

    button.textContent = isHidden
        ? 'Show instructions'
        : 'Hide instructions';
});
