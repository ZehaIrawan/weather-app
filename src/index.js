

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '9bf5614e989b618c0574d6238d81db95';

// const key = '9bf5614e989b618c0574d6238d81db95';
const content = document.querySelector('#weather');
const icon = document.querySelector('#weather-icon');

function basic(city) {
  fetch(`${url}${city}&APPID=${key}`, {
    mode: 'cors',
  })
    .then(response => response.json())
    .then((response) => {
      // console.log(response);
      // content.innerHTML = `City :${response.name},Weather description :${response.weather[0].description}, Temperature : ${response.main.temp},${response.weather[0].icon}, Wind : ${response.wind.speed},Humidity : ${response.main.humidity}`;
      display(response);
    });
}

function display(data) {
  const city = document.querySelector('#city');
  city.innerHTML = data.name;
  const description = document.querySelector('#desc');
  description.innerHTML = data.weather[0].description;
  const temp = document.querySelector('#temp');
  temp.innerHTML = `${data.main.temp} Kelvin`;

  const icon = document.querySelector('#icon');
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}


function submitButton() {
  const submitButton = document.querySelector('#checkWeather');
  submitButton.addEventListener('click', () => {
    const city = document.querySelector('#userInput').value;
    basic(city);
  });
}
submitButton();
