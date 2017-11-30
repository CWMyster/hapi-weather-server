const Axios = require('axios');

const weatherApiKey = 'aea2426575f5160f6897ea6916b2f153'
const weatherApiRoot = 'https://api.openweathermap.org/data/2.5';

async function getCurrentWeather(zip){
  const method = '/weather';
  const params = `?zip=${zip},us&us&units=imperial&appid=${weatherApiKey}`;

  const url = `${weatherApiRoot}${method}${params}`;

  let obj = {};

  try {
    const response = await Axios.get(url);
    obj = response.data;

  }
  catch (error)
  {
    obj.error = error;
  }
  return obj;
}
module.exports = {
  getCurrent: getCurrentWeather
};
