let randomNumber = Math.floor(Math.random() * 6234) + 1;

let ayaTag = document.querySelector(".random_aya_h2");
let surahName = document.getElementById("surah-name");
let ayaNumber = document.getElementById("aya-number");

// Send GET request using Fetch API
fetch(`http://api.alquran.cloud/v1/ayah/${randomNumber}`)
  .then((response) => response.json())
  .then((data) => {
    // Get random verse
    const varese = data.data;

    ayaTag.innerHTML = ` ${varese.text}`;
    surahName.innerHTML = `${varese.surah.name}`;
    ayaNumber.innerHTML = `الاية :${varese.numberInSurah}`;

    console.log();
    // console.log(verse.)
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
