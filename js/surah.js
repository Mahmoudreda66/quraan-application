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
        next_surah.href = `surah.html?id=1`
    }
    else{
        next_surah.href = `surah.html?id=${id}`
    }
}
function prevSurah(){
    let prev_surah = document.getElementById('prev_surah')
    let id =Number(url.get('id'))
    id -=1
    if(id > 0){
        prev_surah.href = `surah.html?id=${id}`
    }
    else{
        prev_surah = `surah.html?id=1`
    }
}
const surah = fetch(`https://api.quran.com/api/v4/verses/by_chapter/${url.get('id')}?language=ar&per_page=all&fields=text_uthmani`).then(response => response.json()).then(data => {
    let surah_content = document.getElementsByClassName('surah-content mt-3 mb-0')[0]
    for(let i = 0; i < data.verses.length - 1; i++){
        surah_content.textContent += data.verses[i].text_uthmani + "۝"
    }
    surah_content.textContent += data.verses[data.verses.length - 1].text_uthmani
})