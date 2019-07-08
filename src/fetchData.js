const basic =  async (city) =>  {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const key = '9bf5614e989b618c0574d6238d81db95';
  const path = `${baseUrl}${city}&units=metric&APPID=${key}`;
  const data = await fetch(path, { mode: 'cors' })
    .then((res) => {
      if (res.status === 200) return res.json();
      return Promise.reject(`${city} was not found`);
    });
  return data;
};

export default basic;
