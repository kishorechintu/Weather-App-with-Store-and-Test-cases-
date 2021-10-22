import { mockWeatherResponse } from 'src/app/mockWeatherData';
import { formatWeatherData, getDay, getImage } from './utilities';

describe('Utility Classes', () => {
  it('should format the weather data response', () => {
    const formatedData = formatWeatherData(mockWeatherResponse);
    expect(formatedData.length).toEqual(6);
    expect(formatedData[2].date).toEqual('2021-10-24 00:00:00');
    expect(formatedData[2].day).toEqual('Sunday');
    expect(formatedData[2].description).toEqual('scattered clouds');
    expect(formatedData[2].image).toEqual('assets/cloudy.png');
    expect(formatedData[2].location).toEqual('Hyderabad');
    expect(formatedData[2].min).toEqual(21);
    expect(formatedData[2].max).toEqual(21);
    expect(formatedData[2].temperature).toEqual(21);
  });

  it('should get the image locations', () => {
    const url = getImage('scattered clouds');
    expect(url).toEqual('assets/cloudy.png');

    const url2 = getImage('few clouds');
    expect(url2).toEqual('assets/few-clouds.png');

    const url3 = getImage('broken clouds');
    expect(url3).toEqual('assets/strom.png');

    const url4 = getImage('clear sky');
    expect(url4).toEqual('assets/clear-sun.png');

    const url5 = getImage('light rain');
    expect(url5).toEqual('assets/normal-rain.png');

    const url6 = getImage('overcast clouds');
    expect(url6).toEqual('assets/cloud-night.png');

    const url7 = getImage('testing');
    expect(url7).toEqual('assets/cloud-day.png');
  });

  it('should return day', () => {
    const day = getDay('2021-10-24 00:00:00');
    expect(day).toEqual('Sunday');

    const day2 = getDay('2021-10-25 00:00:00');
    expect(day2).toEqual('Monday');

    const day3 = getDay('2021-10-26 00:00:00');
    expect(day3).toEqual('Tuesday');

    const day4 = getDay('2021-10-27 00:00:00');
    expect(day4).toEqual('Wednesday');

    const day5 = getDay('2021-10-28 00:00:00');
    expect(day5).toEqual('Thursday');

    const day6 = getDay('2021-10-29 00:00:00');
    expect(day6).toEqual('Friday');
  });
});
