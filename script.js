document.addEventListener('DOMContentLoaded', () => {
    // Tworzymy element przycisku
    const button = document.createElement('button');
    button.innerText = 'HTML,CSS - EBOOK';  // Tekst na przycisku
    button.className = 'test1'; // Przypisujemy klasę CSS

    // Wyszukujemy kontener, w którym już znajduje się element <p>
    const container = document.querySelector('.container');

    // Dodajemy przycisk do kontenera, tuż po elemencie <p>
    container.appendChild(button);

    // Obsługuje kliknięcie na przycisku
    button.addEventListener('click', () => {
        window.location.href = "https://materials.offservers.pl/ebook/html-i-css-zaprojektuj-i-zbuduj-witryne-www-podrecznik-front-end-developera-jon-duckett-Ebookpoint.pl.pdf";
    });
});
