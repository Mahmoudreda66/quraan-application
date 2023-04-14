let ayaTag = document.querySelector(".random_aya_h2"),
  surahName = document.getElementById("surah-name"),
  ayaNumber = document.getElementById("aya-number");

fetch(`https://api.quran.com/api/v4/verses/random?language=ar&words=true&fields=text_uthmani`)
  .then((response) => response.json())
  .then((data) => {

    fetch(`https://api.quran.com/api/v4/chapters/${data.verse.verse_key.split(':')[0]}?language=ar`)
      .then(surahRes => surahRes.json())
      .then(surah => surahName.innerHTML = surah.chapter.name_arabic)

    ayaTag.innerHTML = ` ${data.verse.text_uthmani}`;
    ayaNumber.innerHTML = `الاية :${data.verse.verse_number}`;
  })