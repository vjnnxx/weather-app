import './style.css';
import {getCurrentWeather, getFourDaysWeather, fetchBlob} from './api';

let result;

const updateDay = async () => {
    cards.innerHTML = '';
    actualLocation = location.value;
    result = await getFourDaysWeather(actualLocation);
    console.log(result)
    const current = result[0];
    let dayDate = new Date(current.localtime);
    
    let day = dayDate.getDate();
    let month = dayDate.getMonth();

    const div = document.createElement('div');
    div.classList.toggle('forecast-card')
    const header = document.createElement('h2');
    header.textContent = current.city_name + `, ${current.country} - ${day} / ${month + 1}`; //Deixar só mês e dia da data
    div.appendChild(header);
    const minMax = document.createElement('p');
    minMax.textContent = `${current.min_temp}ºC / ${current.max_temp}ºC`;
    div.appendChild(minMax);
    const uv = document.createElement('p');
    uv.textContent = `Índice UV: ${current.uv}`;
    div.appendChild(uv);
    const umidity = document.createElement('p');
    umidity.textContent = `Umidade do ar: ${current.humidity}%`;
    div.appendChild(umidity);
    const rainChance = document.createElement('p');
    rainChance.textContent = `Chance de precipitação: ${current.chance_of_rain}%`;
    div.append(rainChance);
    const totalPrecipitation = document.createElement('p');
    totalPrecipitation.textContent = `Precipitação total: ${current.total_precipitation} mm`;
    div.append(totalPrecipitation);

    const icon = new Image();

    const iconDiv = document.createElement('div');
    iconDiv.classList.toggle('icon-div');

    icon.src = 'https:' + current.condition_icon;

    const conditionText = document.createElement('p'); 
    conditionText.textContent = current.condition_text;

    iconDiv.appendChild(icon);
    iconDiv.appendChild(conditionText);

    div.appendChild(iconDiv);

    cards.appendChild(div);
    
    const days = document.querySelector('.days');

    days.innerHTML = '';

    //Gerar mini divs com icone do tempo nos próximos 3 dias + temp max e min
    result.forEach((day) =>{
        const div = document.createElement('div');
        div.classList.toggle('mini-card');

        let dayDate = new Date(day.date);

    
        let date = dayDate.getDate();
        let month = dayDate.getMonth();


        const calendar = document.createElement('p');
        calendar.textContent = `${date} / ${month + 1}`;

        const temp = document.createElement('p');
        temp.textContent = `${day.min_temp}ºC / ${day.max_temp}ºC`;
        const icon = new Image();
        icon.src = 'https:' + current.condition_icon;

        div.append(calendar);
        div.appendChild(temp);
        div.appendChild(icon);
        days.appendChild(div);

    });


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




