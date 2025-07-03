const episodes = [
    'episode1.mp4',
    'episode2.mp4',
    'episode3.mp4',
    // Добавляй сколько хочешь серий
];

// Функция для отображения всех серий
function displaySeries() {
    const seriesContainer = document.getElementById('seriesContainer');
    seriesContainer.innerHTML = ''; // Очистка контейнера

    episodes.forEach((episode, index) => {
        const button = document.createElement('button');
        button.innerText = `Серия ${index + 1}`;
        button.onclick = () => changeEpisode(episode);
        seriesContainer.appendChild(button);
    });
}

// Функция для смены видео
function changeEpisode(episode) {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSource = document.getElementById('videoSource');

    if (videoPlayer && videoSource) {
        videoSource.src = episode;
        videoPlayer.load();
    }
}

// Запуск
displaySeries();