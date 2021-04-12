const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');
const bg = document.querySelector('.wcontainer');

const updateCity = async (city)=>{
    // updateCity(city)
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
    return {
        'cityDets':cityDets,
        'weather':weather
    };
}
cityForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city).then(data=>updateUI(data))
    .catch(err=>console.log(err));

    
});

const updateUI = (data)=>{
    const {cityDets, weather} = data;

    details.innerHTML =`
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`

    let timeSrc = null;

    weather.IsDayTime? timeSrc='images/sunny.svg': timeSrc='images/night.svg';
    time.setAttribute("src", timeSrc);

    weather.IsDayTime? bg.style.backgroundImage = "url('images/sunny.svg')": bg.style.backgroundImage = "url('images/night.svg')";
    time.setAttribute("src", timeSrc);



    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);


    if (card.classList.contains('d-none')){
        card.classList.remove("d-none");
    }
}