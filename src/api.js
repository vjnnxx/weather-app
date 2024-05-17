const API_KEY = '3bd87e15a65841aca9734055241305';

function cleanString(string){
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

async function getForecast(locationQuery){

    const params = new URLSearchParams({
        'q': cleanString(locationQuery),
        'lang': 'pt',
        'days': 4,
    });

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${params}&aqi=no`);
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
                'condition_text': day.day.condition.text,
                'condition_icon': day.day.condition.icon,
                'city_name': location.name,
                'country': location.country,
                'localtime': location.localtime,
            }
    
            forecastArray.push(forecast);
        });
    
        return forecastArray
    } catch (err){
        console.log(err);
    }
    
}

export {getForecast}