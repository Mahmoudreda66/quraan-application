let rosaryBtn = document.getElementById('rosary-btn');

// just rosray animation
rosaryBtn.onmousedown = (e) => e.target.classList.remove('shadow');
rosaryBtn.onmouseup = (e) => e.target.classList.add('shadow');

new WOW().init();
