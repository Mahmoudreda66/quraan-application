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
            // Set default location to Cairo if user denies location access
            localStorage.setItem('userLatitude', '30.0444');
            localStorage.setItem('userLongitude', '31.2357');
        }
    );
}
// =============================================================

// fetch data from API
let today = new Date();
let dayLink = today.getDate()
let monthLink = today.getMonth() + 1;
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
            const apiId = dayLink - 1;
            weekDay.textContent = `${data.data[apiId].date.hijri.weekday.ar}`
            gregDate.innerHTML = `${data.data[apiId].date.readable}`
            hijriDate.innerHTML = `${data.data[apiId].date.hijri.date}`

            fajrTime.innerHTML = `${data.data[apiId].timings.Fajr.substring(0, 5)}`
            sunriseTime.innerHTML = `${data.data[apiId].timings.Sunrise.substring(0, 5)}`
            dhuhrTime.innerHTML = `${data.data[apiId].timings.Dhuhr.substring(0, 5)}`
            asrTime.innerHTML = `${data.data[apiId].timings.Asr.substring(0, 5)}`
            maghribTime.innerHTML = `${data.data[apiId].timings.Maghrib.substring(0, 5)}`
            ishaTime.innerHTML = `${data.data[apiId].timings.Isha.substring(0, 5)}`
            console.log(data.data[apiId]);

        })
        .catch(error => console.error(error));
}

getCalendar()
// http://api.aladhan.com/v1/calendar/2023/05?latitude=30.5765383&longitude=31.5040656