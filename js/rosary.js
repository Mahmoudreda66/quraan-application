let rosary_counter = localStorage.getItem('rosary_counter') ?? 0;
let rosary_interval = localStorage.getItem('rosary_interval') ?? 0,
    text_changer = [
        {
            name: 'لا إله إلا الله',
            sound: './sounds/rosary/la-ellah-ela-allah.mp3'
        },
        {
            name: 'الله أكبر',
            sound: './sounds/rosary/allah-akbar.mp3'
        },
        {
            name: 'الحمد لله',
            sound: './sounds/rosary/el7amd-llah.mp3'
        }
    ],
    rosaryButton = document.getElementById('rosary-btn');
    document.getElementById('33_click_changer').textContent = text_changer[rosary_interval]['name'];

// just rosray animation
rosaryButton.onmousedown = (e) => e.target.classList.remove('shadow');
rosaryButton.onmouseup = (e) => e.target.classList.add('shadow');

let tasabee7Sound = (soundSrc) => {
    let audioEl = new Audio(soundSrc);

    audioEl.play();
}

rosaryButton.textContent = rosary_counter;

rosaryButton.onclick = function () {
    rosary_counter++;

    if (rosary_counter % 33 == 0) {
        rosary_interval++;
        if (rosary_interval == 3)
        {
            rosary_interval = 0;
        }
        localStorage.setItem('rosary_interval', rosary_interval);
        document.getElementById('33_click_changer').textContent = text_changer[rosary_interval]['name'];
        tasabee7Sound(text_changer[rosary_interval]['sound']);
    }
    rosaryButton.textContent = rosary_counter;
    localStorage.setItem('rosary_counter', rosary_counter)
    
};
