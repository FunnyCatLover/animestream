const episodes = [
    'episode1.mp4',
    'episode2.mp4',
    'episode3.mp4',
    'episode4.mp4',
    'episode5.mp4',
    'episode6.mp4',
    'episode7.mp4',
    'episode8.mp4'
];

const episodesPerPage = 1; // Количество серий на странице
let currentPage = 1;       // Текущая страница

// Функция для отображения серий на текущей странице
function displaySeries() {
    const seriesContainer = document.getElementById('seriesContainer');
    seriesContainer.innerHTML = ''; // Очистка контейнера

    const start = (currentPage - 1) * episodesPerPage;
    const end = start + episodesPerPage;
    const currentEpisodes = episodes.slice(start, end); // Серии на текущей странице

    currentEpisodes.forEach((episode, index) => {
        const button = document.createElement('button');
        button.innerText = `Серия ${start + index + 1}`;
        button.onclick = () => changeEpisode(episode);
        seriesContainer.appendChild(button);
    });
}

// Функция для смены страницы
function changePage(direction) {
    const maxPage = Math.ceil(episodes.length / episodesPerPage); // Общее количество страниц

    currentPage += direction;
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > maxPage) {
        currentPage = maxPage;
    }

    displaySeries(); // Перерисовка серий на странице
}

// Функция для смены видео
function changeEpisode(episode) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');
    videoSource.src = episode;
    videoPlayer.load();
    videoPlayer.play();
}

// Инициализация страницы
displaySeries();