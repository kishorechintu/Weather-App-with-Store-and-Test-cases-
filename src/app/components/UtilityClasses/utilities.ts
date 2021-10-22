import { WeatherDataModel, WeatherResponseModel } from 'src/app/weather.model';

export function formatWeatherData(data: WeatherResponseModel) {
  let arr: WeatherDataModel[] = [];
  data.list.forEach((item) => {
    let obj = {} as WeatherDataModel;
    let date = item.dt_txt.split(' ')[0];
    if (date === item.dt_txt.split(' ')[0]) {
      obj.date = item.dt_txt;
      obj.day = getDay(item.dt_txt);
      obj.description = item.weather[0].description;
      obj.image = getImage(item.weather[0].description);
      obj.location = data.city.name;
      obj.min = temperatureConverter(String(item.main.temp_min));
      obj.max = temperatureConverter(String(item.main.temp_max));
      obj.temperature = temperatureConverter(String(item.main.temp));
      let checkDuplicate = arr.some((data) => {
        return data.day === obj.day;
      });
      if (!checkDuplicate) {
        arr.push(obj);
      }
    }
  });
  return arr;
}

export function getImage(arg: string) {
  switch (arg) {
    case 'scattered clouds':
      return 'assets/cloudy.png';

    case 'few clouds':
      return 'assets/few-clouds.png';

    case 'broken clouds':
      return 'assets/strom.png';

    case 'clear sky':
      return 'assets/clear-sun.png';

    case 'light rain':
      return 'assets/normal-rain.png';

    case 'overcast clouds':
      return 'assets/cloud-night.png';

    default:
      return 'assets/cloud-day.png';
  }
}

export function getDay(arg: string) {
  let date = new Date(arg);
  const weekday = new Array(7);
  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  let day = weekday[date.getDay()];
  return day;
}

export function temperatureConverter(valNum: string) {
  return Math.round(parseFloat(valNum) - 273.15);
}
