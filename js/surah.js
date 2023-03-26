let surahAudio = document.getElementById('surahAudio'),
    playIcon = document.getElementById('play-icon');

let playSurahAudio = _ => {
    if (surahAudio.paused) {
        surahAudio.play();
        playIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        surahAudio.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
    }
}