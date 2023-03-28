let SurahLink = document.getElementById('SurahLink');
let SurahName = document.getElementById('SurahName');
let AyaCount = document.getElementById('aya-count');
let SurahType = document.getElementById('surah-type');
let SurahOrder = document.getElementById('surah-order');
let MsgRead = document.getElementById('read-message');

if (localStorage.getItem("Progress")) {
    fetch(`https://api.quran.com/api/v4/chapters/${localStorage.getItem('Progress')}?language=ar`)
        .then(response => response.json())
        .then(data => {
            SurahName.innerHTML = data.chapter.name_arabic;
            AyaCount.innerHTML = data.chapter.verses_count;
            SurahType.innerHTML = data.chapter.revelation_place == "makkah" ? "مكية" : "مدنية";
            SurahOrder.innerHTML = data.chapter.revelation_order;
            SurahLink.href = `surah.html?id=${data.chapter.id}`
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
