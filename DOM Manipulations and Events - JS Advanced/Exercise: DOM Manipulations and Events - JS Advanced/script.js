function create(words) {
    const contentElement = document.querySelector('#content');

    words.forEach(word => {
        const divElement = document.createElement('div');

        const pElement = document.createElement('p');
        pElement.textContent = word;

        pElement.style.display = 'none';

        divElement.addEventListener('click', () => {
            pElement.style.display = 'block';
        });

        divElement.appendChild(pElement);

        contentElement.appendChild(divElement);
    });
}