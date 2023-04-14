let rosary_counter = 0;
let text_changer = ['الحمد لله', 'لا إله إلا الله', 'الله أكبر']
let x = 0
function sound_clicks_33() {
    let snd = document.getElementById('sound_click_33')
    snd.play();
}
function sound_clicks() {
    let snd = document.getElementById('sound_click');
    snd.play();
}
rosary_counter = localStorage.getItem('old_rosary_count') ?? 0
document.getElementById('rosary-btn').textContent = rosary_counter
document.getElementById('rosary-btn').onclick = function () {

    rosary_counter++;
    if (rosary_counter % 33 == 0) {
        document.getElementById('33_click_changer').textContent = text_changer[x];
        x++;
        sound_clicks_33();
    }
    else {
        sound_clicks();

    }
    document.getElementById('rosary-btn').textContent = rosary_counter;
    localStorage.setItem('33_click_changer', rosary_counter)
    localStorage.setItem('old_rosary_count', rosary_counter)
    if (x == 3) {
        x = 0
    }
};
