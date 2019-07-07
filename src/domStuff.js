
import basic from './fetchData';

function addEventListener() {
  const submitButton = document.querySelector('#checkWeather');
  submitButton.addEventListener('click', () => {
    const city = document.querySelector('#userInput').value;
    basic(city);
  });

  const celcius = document.querySelector('#c');
  celcius.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const justNumber = parseInt(temp.innerHTML);
    temp.innerHTML = `${(((justNumber - 32) * 5) / 9).toFixed(2)} C`;
  });

  const fahrenheit = document.querySelector('#f');
  fahrenheit.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const justNumber = parseInt(temp.innerHTML);
    temp.innerHTML = `${((justNumber * 9) / 5 + 32).toFixed(2)} F`;
  });
}

function display(data) {
  const city = document.querySelector('#city');
  city.innerHTML = data.name;
  const description = document.querySelector('#desc');
  description.innerHTML = data.weather[0].description;
  const temp = document.querySelector('#temp');
  temp.innerHTML = `${data.main.temp} C`;

  const icon = document.querySelector('#icon');
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}


export {
  addEventListener,
  display,
};
