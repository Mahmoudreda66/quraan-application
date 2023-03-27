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
let url = new URLSearchParams(location.search)
function nextSurah(){
    let next_surah = document.getElementById('next_surah')
    let id =Number(url.get('id'))
    id+=1
    if(id > 114){
        next_surah.href = `surah.html?id=0`
    }
    else{
        next_surah.href = `surah.html?id=${id}`
    }
}
function prevSurah(){
    let prev_surah = document.getElementById('prev_surah')
    let id =Number(url.get('id'))
    id -=1
    if(id >= 0){
        prev_surah.href = `surah.html?id=${id}`
    }
    else{
        prev_surah = `surah.html?id=0`
    }
}