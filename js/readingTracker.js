let SurahLink = document.getElementById('SurahLink');
let MsgRead = document.getElementById('read-message');

if (localStorage.getItem("Progress")) {
    fetch(`https://api.quran.com/api/v4/chapters/${localStorage.getItem('Progress')}?language=ar`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('SurahName').innerHTML = data.chapter.name_arabic;
            document.getElementById('aya-count').innerHTML = data.chapter.verses_count;
            document.getElementById('surah-type').innerHTML = data.chapter.revelation_place == "makkah" ? "مكية" : "مدنية";
            document.getElementById('surah-order').innerHTML = data.chapter.revelation_order;
            document.getElementById('SurahLink').href = `surah.html?id=${data.chapter.id}`
            document.getElementById('rocket-link').href = `surah.html?id=${data.chapter.id}`
        })
    MsgRead.style.display = "none";
    SurahLink.style.display = "block";
}
else {
    SurahLink.style.display = "none";
    MsgRead.style.display = "block";
    document.getElementById('progressInfo').style.display = "none"
}
