
import basic from './fetchData';


function clearDisplay() {
  const city = document.querySelector('#city');
  city.innerHTML = '';
  const description = document.querySelector('#desc');
  description.innerHTML = '';
  const temp = document.querySelector('#temp');
  temp.innerHTML = '';

  const icon = document.querySelector('#icon');
  icon.src = '';
  const toggle = document.querySelector('.toggle ');
  toggle.removeAttribute('id');
}

function displayError(err) {
  clearDisplay();
  const city = document.querySelector('#city');
  city.innerHTML = `${err}`;
}


function display(data) {
  const city = document.querySelector('#city');
  city.innerHTML = data.name;
  const description = document.querySelector('#desc');
  description.innerHTML = data.weather[0].description;
  const temp = document.querySelector('#temp');
  temp.innerHTML = `${Math.round(data.main.temp)} C`;

  const icon = document.querySelector('#icon');
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const toggle = document.querySelector('.toggle ');
  toggle.id = 'active';
}


function addEventListener() {
  const submitButton = document.querySelector('#checkWeather');
  submitButton.addEventListener('click', () => {
    const city = document.querySelector('#userInput').value;
    basic(city)
      .then(data => display(data))
      .catch(err => displayError(err));
  });

  const celcius = document.querySelector('#c');
  celcius.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const justNumber = parseInt(temp.innerHTML, 10);
    temp.innerHTML = `${Math.round((((justNumber - 32) * 5) / 9))} C`;
  });

  const fahrenheit = document.querySelector('#f');
  fahrenheit.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const justNumber = parseInt(temp.innerHTML, 10);
    temp.innerHTML = `${Math.round(((justNumber * 9) / 5 + 32))} F`;
  });
}


export {
  addEventListener,
  display,
};
