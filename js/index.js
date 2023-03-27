let rosaryBtn = document.getElementById('rosary-btn');

// just rosray animation
rosaryBtn.onmousedown = (e) => e.target.classList.remove('shadow');
rosaryBtn.onmouseup = (e) => e.target.classList.add('shadow');

new WOW().init();

fetch('https://api.quran.com/api/v4/chapters?language=ar')
    .then(response => response.json())
    .then(data => {
        let surahsContainer = document.getElementById('surahs-container');

        for (let i = 0; i < data.chapters.length; i++) {
            surahsContainer.innerHTML += `<div class="col-lg-2 col-md-4 col-6 mb-3">
                                            <a href="surah.html?id=${data.chapters[i].id}">
                                            <div class="bg-white p-3 rounded-1 wow fadeInUpBig">
                                                <span class="surah_name d-block">
                                                    ${data.chapters[i].name_arabic}
                                                </span>
                                                <span class="d-block text-start">${data.chapters[i].verses_count} آية</span>
                                            </div>
                                            </a>
                                        </div>`;
        }
    });