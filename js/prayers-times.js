// Check if user's location is already stored in local storage
if (!localStorage.getItem('userLatitude') || !localStorage.getItem('userLongitude')) {
    // Get user's location using browser's geolocation API
    navigator.geolocation.getCurrentPosition(
        function (position) {
            // Store user's location in local storage
            localStorage.setItem('userLatitude', position.coords.latitude);
            localStorage.setItem('userLongitude', position.coords.longitude);
        },
        function (error) {
            console.error('Error getting user location:', error);
        }
    );
}
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let today = new Date();
let day = today.getDate();
let month = months[today.getMonth()];
let year = today.getFullYear();
let dateToday = document.getElementById('dateToday')
dateToday.innerHTML = `اليوم هو ${day} ${month} ${year}`

// =============================================================

// fetch data from API
let dayLink = today.getDate()
let monthLink = today.getMonth() + 1
let yearLink = today.getFullYear()
console.log(dayLink, monthLink, yearLink);
console.log(today);

let fajrTime = document.getElementById('elFajr')
let sunriseTime = document.getElementById('elSunrise')
let dhuhrTime = document.getElementById('elDhuhr')
let asrTime = document.getElementById('elAsr')
let maghribTime = document.getElementById('elMaghrib')
let ishaTime = document.getElementById('elIsha')
let weekDay = document.getElementById('weekDay')
let gregDate = document.getElementById('gregDate')
let hijriDate = document.getElementById('hijriDate')

let getCalendar = () => {
    let url = `https://api.aladhan.com/v1/calendar/${yearLink}/${monthLink}?latitude=${localStorage.getItem('userLatitude')}&longitude=${localStorage.getItem('userLongitude')}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            weekDay.textContent = `${data.data[dayLink - 1].date.hijri.weekday.ar}`
            gregDate.innerHTML = `${data.data[dayLink - 1].date.readable}`
            hijriDate.innerHTML = `${data.data[dayLink - 1].date.hijri.date}`
            console.log(data.data[dayLink - 1]);

        })
        .catch(error => console.error(error));
}

getCalendar()
// http://api.aladhan.com/v1/calendar/2023/05?latitude=30.5765383&longitude=31.5040656