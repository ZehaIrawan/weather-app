const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '&APPID=9bf5614e989b618c0574d6238d81db95';

// const key = '9bf5614e989b618c0574d6238d81db95';
const content = document.querySelector('.content');


function basic(city) {
  fetch(`${url}${city}${key}`, {
    mode: 'cors',
  })
    .then(response => response.json())
    .then((response) => {
    // console.log(response);
      content.innerHTML = `City :${response.name},Weather description :${response.weather[0].description}, Temperature : ${response.main.temp},${response.weather[0].icon}, Wind : ${response.wind.speed},Humidity : ${response.main.humidity}`;
    });
}


const submitButton = document.querySelector('#checkWeather');
submitButton.addEventListener('click', () => {
  const city = document.querySelector('#userInput').value;
  basic(city);
});
