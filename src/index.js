import './style.css';
import {getCurrentWeather, getThreeDaysWeather} from './api';

const updateDay = async () => {
    cards.innerHTML = '';
    actualLocation = location.value;
    let result = await getCurrentWeather(actualLocation);

    let dayDate = new Date(result.localtime);
    
    let day = dayDate.getDate();
    let month = dayDate.getMonth();

    const div = document.createElement('div');
    div.classList.toggle('forecast-card')
    const header = document.createElement('h2');
    header.textContent = result.city_name + `, ${result.country} - ${day} / ${month + 1}`; //Deixar só mês e dia da data
    div.appendChild(header);
    const minMax = document.createElement('p');
    minMax.textContent = `${result.min_temp}ºC / ${result.max_temp}ºC`;
    div.appendChild(minMax);
    const uv = document.createElement('p');
    uv.textContent = `Índice UV: ${result.uv}`;
    div.appendChild(uv);
    const umidity = document.createElement('p');
    umidity.textContent = `Umidade do ar: ${result.humidity}%`;
    div.appendChild(umidity);
    const rainChance = document.createElement('p');
    rainChance.textContent = `Chance de precipitação: ${result.chance_of_rain}%`;
    div.append(rainChance);
    const totalPrecipitation = document.createElement('p');
    totalPrecipitation.textContent = `Precipitação total: ${result.total_precipitation} mm`;
    div.append(totalPrecipitation);
    cards.appendChild(div);

};

const cards = document.querySelector('.cards');
const location = document.querySelector('#location');
const forecastContent = document.querySelector('.forecast-content');
forecastContent.style.visibility = 'hidden';

let actualLocation = '';

const form = document.querySelector('#forecast-form');
form.addEventListener('submit', async (e) => { 
    e.preventDefault();
    updateDay();
    forecastContent.style.visibility = 'visible';
});

const today = document.querySelector('#today');
today.addEventListener('click', async () =>{
    updateDay();
});

const expanded = document.querySelector('#expanded');
expanded.addEventListener('click', async () =>{
    cards.innerHTML = '';

    let result = await getThreeDaysWeather(actualLocation);
    result.forEach((day)=>{

        const div = document.createElement('div');
        div.classList.toggle('forecast-card')
        
        const header = document.createElement('h2');
        header.textContent = day.city_name + `, ${day.country} - ${day.date}`; //Deixar só mês e dia da data
        div.appendChild(header);
        const minMax = document.createElement('p');
        minMax.textContent = `${day.min_temp}ºC / ${day.max_temp}ºC`;
        div.appendChild(minMax);
        const uv = document.createElement('p');
        uv.textContent = `Índice UV: ${day.uv}`;
        div.appendChild(uv);
        const umidity = document.createElement('p');
        umidity.textContent = `Umidade do ar: ${day.humidity}%`;
        div.appendChild(umidity);
        const rainChance = document.createElement('p');
        rainChance.textContent = `Chance de precipitação: ${day.chance_of_rain}%`;
        div.append(rainChance);
        const totalPrecipitation = document.createElement('p');
        totalPrecipitation.textContent = `Precipitação total: ${day.total_precipitation} mm`;
        div.append(totalPrecipitation);
        cards.appendChild(div);
    });

});



