const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=9bf5614e989b618c0574d6238d81db95';

// const key = '9bf5614e989b618c0574d6238d81db95';


function basic() {
  fetch(url, {
    mode: 'cors',
  })
    .then(response => response.json())
    .then((response) => {
      console.log(response);
    });
}

basic();
