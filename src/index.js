import './style.css';

const API_KEY = '3bd87e15a65841aca9734055241305';

async function getCurrentWeather(city, country){
    let locationQuery = city + ' ' + country
    const params = new URLSearchParams({
        'q': locationQuery,
        'lang': 'pt',
    });

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params}`);
    const responseJson = await response.json();
    const forecastDay = responseJson.forecast.forecastday[0];
    const location = responseJson.location;
    const forecast = {
        'max_temp': forecastDay.day.maxtemp_c,
        'min_temp': forecastDay.day.mintemp_c,
        'uv': forecastDay.day.uv,
        'umidity': forecastDay.day.avghumidity,
        'chance_of_rain': forecastDay.day.daily_chance_of_rain,
        'total_precipitation': forecastDay.day.totalprecip_mm,
        'date': forecastDay.date,
        'city_name': location.name,
        'country': location.country,
        'localtime': location.localtime,
    }

    return forecast
}

async function getThreeDaysWeather(city, country){
    let locationQuery = city + ' ' + country
    const params = new URLSearchParams({
        'q': locationQuery,
        'days': 5,
    });

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params}`);
    const responseJson = await response.json();
    const forecastDays = responseJson.forecast.forecastday;
    const location = responseJson.location;
    const forecastArray = [];
    forecastDays.forEach((day)=>{
        const forecast = {
            'max_temp': day.day.maxtemp_c,
            'min_temp': day.day.mintemp_c,
            'uv': day.day.uv,
            'umidity': day.day.avghumidity,
            'chance_of_rain': day.day.daily_chance_of_rain,
            'total_precipitation': day.day.totalprecip_mm,
            'date': day.date,
            'city_name': location.name,
            'country': location.country,
            'localtime': location.localtime,
        }

        forecastArray.push(forecast);
    });

    return forecastArray
    
}

const main = document.querySelector('.main');
const form = document.querySelector('#forecast-form');
const city = document.querySelector('#city');
const country = document.querySelector('#country');
form.addEventListener('submit', async (e) => { 
    e.preventDefault();
    let result = await getCurrentWeather(city.value, country.value);
    console.log(result)

    const div = document.createElement('div');
    div.classList.toggle('forecast-card')
    const header = document.createElement('h2');
    header.textContent = result.city_name + `, ${result.country} - ${result.localtime}`;
    div.appendChild(header);
    const minMax = document.createElement('p');
    minMax.textContent = `${result.min_temp}ºC / ${result.max_temp}ºC`;
    div.appendChild(minMax);
    const uv = document.createElement('p');
    uv.textContent = `Índice UV: ${result.uv}`;
    div.appendChild(uv);
    const umidity = document.createElement('p');
    umidity.textContent = `Umidade do ar: ${result.umidity}`;
    div.appendChild(umidity);
    const rainChance = document.createElement('p');
    rainChance.textContent = `Chance de precipitação: ${result.chance_of_rain}%`;
    div.append(rainChance);
    const totalPrecipitation = document.createElement('p');
    totalPrecipitation.textContent = `Precipitação total: ${result.total_precipitation} mm`;
    div.append(totalPrecipitation);
    
    main.appendChild(div);
});

let ainda = await getThreeDaysWeather('Toronto Canada');
//console.log(ainda)

