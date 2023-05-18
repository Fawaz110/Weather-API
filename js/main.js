let searchInp = document.getElementById('searchinp');
let findBtn = document.querySelector('input[type="submit"]')
let todayClimate = document.querySelector('.today .side');
let secondDayClimate = document.querySelector('.center .next-day-climate');
let thirdDayClimate = document.querySelector('.next-day .side');
// console.log(findBtn);
// console.log(searchInp);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let txt = 'cairo';
let date = new Date();
let todayIndex = date.getDay();
let monthIndex = date.getMonth();
let response = ``;
let final = ``;


(async function () {
    // response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20a6394df61b4fc087c220047232002&q=${txt}&days=3`)
    // final = await response.json();
    // // console.log(final);
    // // console.log(final.current);
    displayWeather(txt);
})()


async function displayWeather(term) {
    response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20a6394df61b4fc087c220047232002&q=${term}&days=3`)
    final = await response.json();
    // console.log(final);
    // console.log(final.current);
    todayClimate.innerHTML = `<div class="layer">
    <div class="header d-flex justify-content-between text-center p-1">
        <p>${days[todayIndex]}</p>
        <p>${date.getDate()} ${months[monthIndex]}</p>
    </div>
    </div>
    <div class="climate-details p-1 text-start my-4">
    <h3>${final.location.name}</h3>
    <div class="temp d-flex align-items-center justify-content-center">
        <h2>${final.current.temp_c}<sup>o</sup>C</h2>
        <img src="https:${final.current.condition.icon}" alt="">
    </div>
    <span class="my-2 d-block">${final.current.condition.text}</span>
    <div class="others d-flex align-items-center">
        <div class="icon d-flex justify-content-center align-items-center mx-2">
            <img src="imgs/icon-compass.png" class="mx-1" alt="">
            <p class="mb-1">${final.current.wind_dir}</p>
        </div>
        <div class="icon d-flex justify-content-center align-items-center mx-2">
            <img src="imgs/icon-wind.png" class="mx-1" alt="">
            <p class="mb-1">${final.current.wind_kph}km/h</p>
        </div>
        <div class="icon d-flex justify-content-center align-items-center mx-2">
            <img src="imgs/icon-umberella.png" class="mx-1" alt="">
            <p class="mb-1">${final.current.humidity}%</p>
        </div>
    </div>
    </div>`

    secondDayClimate.innerHTML = `<div class="header layer text-center p-1">
    <p>${(todayIndex == 6) ? days[0] : days[todayIndex + 1]}</p>
    </div>
    <div
        class="climate-details p-1 d-flex justify-content-center align-items-center text-center">
        <div>
        <img src="https:${final.forecast.forecastday[1].day.condition.icon}" alt="">
            <div class="temp">
                <h2>${final.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h2>
                <h5>${final.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h5>
            </div>
            <span class="my-3">${final.forecast.forecastday[1].day.condition.text}</span>
        </div>
    </div>`

    thirdDayClimate.innerHTML = `<div class="header layer text-center p-1">
    <p>${(todayIndex == 6) ? days[1] : (todayIndex == 5) ? days[0] : days[todayIndex + 2]}</p>
    </div>
    <div
        class="climate-details p-1 d-flex justify-content-center align-items-center text-center">
        <div>
        <img src="https:${final.forecast.forecastday[2].day.condition.icon}" alt="">
            <div class="temp">
                <h2>${final.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h2>
                <h5>${final.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h5>
            </div>
            <span class="my-3">${final.forecast.forecastday[2].day.condition.text}</span>
        </div>
    </div>`
}




// searchInp.addEventListener('keyup', searchFor)







searchInp.addEventListener('keyup', function () {
    searchFor()
})
async function searchFor() {
    txt = searchInp.value;
    console.log(txt);
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=20a6394df61b4fc087c220047232002&q=${txt}&days=3`)
    let final = await response.json();
    displayWeather(txt);
    // console.log(final);
    // console.log(term.toLowerCase());f
}