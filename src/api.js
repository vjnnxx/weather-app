const API_KEY = '3bd87e15a65841aca9734055241305';

async function getCurrentWeather(locationQuery){
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
        'humidity': forecastDay.day.avghumidity,
        'chance_of_rain': forecastDay.day.daily_chance_of_rain,
        'total_precipitation': forecastDay.day.totalprecip_mm,
        'date': forecastDay.date,
        'city_name': location.name,
        'country': location.country,
        'localtime': location.localtime,
    }

    return forecast
}

async function getThreeDaysWeather(locationQuery){
    const params = new URLSearchParams({
        'q': locationQuery,
        'days': 3,
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
            'humidity': day.day.avghumidity,
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

export {getCurrentWeather, getThreeDaysWeather}