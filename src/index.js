import './style.css';

const API_KEY = '3bd87e15a65841aca9734055241305';

async function getCurrentWeather(city){
    const params = new URLSearchParams({
        'q': city,
        'lang': 'pt',
    });

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params}`);
    const responseJson = await response.json();
    //console.log(responseJson);

    const forecastDay = responseJson.forecast.forecastday[0];
    // console.log(forecastDay);

    //Retornar temperatura máxima / temperatura mínima / índice UV / umidade do ar / chance de chuva / total de precicipitação em mm

    const forecast = {
        'max_temp': forecastDay.day.maxtemp_c,
        'min_temp': forecastDay.day.mintemp_c,
        'uv': forecastDay.day.uv,
        'umidity': forecastDay.day.avghumidity,
        'chance_of_rain': forecastDay.day.daily_chance_of_rain,
        'total_precipitation': forecastDay.day.totalprecip_mm,
    }

    return forecast
}

async function getThreeDaysWeather(city){
    const params = new URLSearchParams({
        'q': city,
        'days': 5,
    });

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params}`);
    const weatherData = await response.json();
    console.log(weatherData);
}


let ainda = await getCurrentWeather('Toronto Canada')

console.log(ainda)