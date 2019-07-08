import { display } from './domStuff';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const key = '9bf5614e989b618c0574d6238d81db95';

function basic(city) {
  fetch(`${url}${city}&units=metric&APPID=${key}`, {
    mode: 'cors',
  })
    .then(response => response.json())
    .then((response) => {
      display(response);
    });
}


export default basic;
