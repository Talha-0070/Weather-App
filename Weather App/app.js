
// getting DOM Elements

const container = document.querySelector('.container')
const input = document.getElementById('input');
const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('name');
const temprature = document.getElementById('temprature');
const weatherIcon = document.getElementById('weatherIcon');

const weatherMessage = document.getElementById('weatherMessage');
const minTemp = document.getElementById('minTemp');
const maxTemp = document.getElementById('maxTemp');


// Weather Map Api

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '919489c7d9msh117c65cafa2930cp1ffff3jsn295049a4cbda',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const searchWeather = (name) => {
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${name}`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        const weather = response.location.name; // for name
        const foreCast = response.current.temp_c;
        const condition = response.current.condition.text;
        const weatherImg = response.current.condition.icon;
        const minTemprature = response.current.wind_kph;
        const maxTemprature = response.current.wind_mph;

        cityName.textContent = weather;
        temprature.textContent = foreCast;
        weatherMessage.textContent = condition;
        weatherIcon.innerHTML = `<img src="${weatherImg}">`;
        minTemp.textContent = minTemprature;
        maxTemp.textContent = maxTemprature;
    

    })
	.catch(err => console.error(err));

}

// icon function

// const weatherIcons = {
//     cloud: '☁',
//     rain: '🌧',
//     partlyCloud: '🌤',
//     clear: '⛅',
//     thunderstorm: '⛈'
// }


//     const showIcons = (e) => {
//         const icons = e.map(icon => {
//             return `<span>${weatherIcons[icon]}</span>`
//         })

//         console.log(icons)
//     }


const staticIcon = () => {
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=tokyo`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)

        const weather = response.location.name; // for name
        const foreCast = response.current.temp_c;
        const condition = response.current.condition.text;
        const weatherImg = response.current.condition.icon;
        const minTemprature = response.current.wind_kph;
        const maxTemprature = response.current.wind_mph;

        cityName.textContent = weather;
        temprature.textContent = foreCast;
        weatherMessage.textContent = condition;
        weatherIcon.innerHTML = `<img src="${weatherImg}">`;
        minTemp.textContent = minTemprature;
        maxTemp.textContent = maxTemprature;
    

    })
	.catch(err => console.error(err));

}


searchBtn.onclick = () => searchWeather(input.value);

staticIcon()

