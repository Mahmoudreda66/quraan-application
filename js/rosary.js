let rosary_counter = localStorage.getItem('rosary_counter') ?? 0,
    text_changer = ['الحمد لله', 'لا إله إلا الله', 'الله أكبر'],
    interval = 0,
    rosaryButton = document.getElementById('rosary-btn');

// just rosray animation
rosaryButton.onmousedown = (e) => e.target.classList.remove('shadow');
rosaryButton.onmouseup = (e) => e.target.classList.add('shadow');

function soundClicks33() {
    let sound = document.getElementById("sound_click_33");
    sound.play();
}

rosaryButton.textContent = rosary_counter;

rosaryButton.onclick = function () {
    rosary_counter++;

    if (rosary_counter % 33 == 0) {
        document.getElementById('rosary_counter').textContent = text_changer[interval];
        interval++;
        soundClicks33();
    }

    rosaryButton.textContent = rosary_counter;
    localStorage.setItem('rosary_counter', rosary_counter)

    if (interval == 3)
        interval = 0
};
