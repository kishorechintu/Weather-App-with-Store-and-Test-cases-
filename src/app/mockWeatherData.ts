import { WeatherDataModel, WeatherResponseModel } from './weather.model';

export const mockWeatherResponse: WeatherResponseModel = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1634882400,
      main: {
        temp: 302.38,
        feels_like: 303.24,
        temp_min: 301.38,
        temp_max: 302.38,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 959,
        humidity: 51,
        temp_kf: 1,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 2.85,
        deg: 16,
        gust: 2.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-22 06:00:00',
    },
    {
      dt: 1634893200,
      main: {
        temp: 302.37,
        feels_like: 302.61,
        temp_min: 302.34,
        temp_max: 302.37,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 956,
        humidity: 46,
        temp_kf: 0.03,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 3.25,
        deg: 3,
        gust: 3.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-22 09:00:00',
    },
    {
      dt: 1634904000,
      main: {
        temp: 299.65,
        feels_like: 299.65,
        temp_min: 298.28,
        temp_max: 299.65,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 956,
        humidity: 55,
        temp_kf: 1.37,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 19,
      },
      wind: {
        speed: 2.99,
        deg: 14,
        gust: 3.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-22 12:00:00',
    },
    {
      dt: 1634914800,
      main: {
        temp: 295.59,
        feels_like: 295.59,
        temp_min: 295.59,
        temp_max: 295.59,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 958,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 2.47,
        deg: 19,
        gust: 3.4,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-22 15:00:00',
    },
    {
      dt: 1634925600,
      main: {
        temp: 294.62,
        feels_like: 294.6,
        temp_min: 294.62,
        temp_max: 294.62,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 958,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 1.37,
        deg: 15,
        gust: 1.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-22 18:00:00',
    },
    {
      dt: 1634936400,
      main: {
        temp: 293.94,
        feels_like: 293.85,
        temp_min: 293.94,
        temp_max: 293.94,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 1.47,
        deg: 358,
        gust: 1.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-22 21:00:00',
    },
    {
      dt: 1634947200,
      main: {
        temp: 293.46,
        feels_like: 293.3,
        temp_min: 293.46,
        temp_max: 293.46,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 1.61,
        deg: 12,
        gust: 1.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-23 00:00:00',
    },
    {
      dt: 1634958000,
      main: {
        temp: 297.47,
        feels_like: 297.45,
        temp_min: 297.47,
        temp_max: 297.47,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 959,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 1.75,
        deg: 38,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-23 03:00:00',
    },
    {
      dt: 1634968800,
      main: {
        temp: 301.66,
        feels_like: 301.36,
        temp_min: 301.66,
        temp_max: 301.66,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 959,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 30,
      },
      wind: {
        speed: 1.58,
        deg: 25,
        gust: 1.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-23 06:00:00',
    },
    {
      dt: 1634979600,
      main: {
        temp: 302.87,
        feels_like: 302.42,
        temp_min: 302.87,
        temp_max: 302.87,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 956,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 31,
      },
      wind: {
        speed: 2.55,
        deg: 347,
        gust: 2.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-23 09:00:00',
    },
    {
      dt: 1634990400,
      main: {
        temp: 298.9,
        feels_like: 299.02,
        temp_min: 298.9,
        temp_max: 298.9,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 956,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 3.23,
        deg: 352,
        gust: 4.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-23 12:00:00',
    },
    {
      dt: 1635001200,
      main: {
        temp: 296.04,
        feels_like: 296.11,
        temp_min: 296.04,
        temp_max: 296.04,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 959,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 2.97,
        deg: 25,
        gust: 4.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-23 15:00:00',
    },
    {
      dt: 1635012000,
      main: {
        temp: 294.86,
        feels_like: 294.89,
        temp_min: 294.86,
        temp_max: 294.86,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 958,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 1.8,
        deg: 51,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-23 18:00:00',
    },
    {
      dt: 1635022800,
      main: {
        temp: 294.21,
        feels_like: 294.15,
        temp_min: 294.21,
        temp_max: 294.21,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 32,
      },
      wind: {
        speed: 1.68,
        deg: 42,
        gust: 1.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-23 21:00:00',
    },
    {
      dt: 1635033600,
      main: {
        temp: 293.86,
        feels_like: 293.68,
        temp_min: 293.86,
        temp_max: 293.86,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 957,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 1.74,
        deg: 34,
        gust: 1.95,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-24 00:00:00',
    },
    {
      dt: 1635044400,
      main: {
        temp: 297.65,
        feels_like: 297.59,
        temp_min: 297.65,
        temp_max: 297.65,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 959,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 17,
      },
      wind: {
        speed: 2.3,
        deg: 58,
        gust: 3.08,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-24 03:00:00',
    },
    {
      dt: 1635055200,
      main: {
        temp: 301.55,
        feels_like: 301.5,
        temp_min: 301.55,
        temp_max: 301.55,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 959,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 1.55,
        deg: 47,
        gust: 1.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-24 06:00:00',
    },
    {
      dt: 1635066000,
      main: {
        temp: 302.6,
        feels_like: 302.54,
        temp_min: 302.6,
        temp_max: 302.6,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 956,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 2.12,
        deg: 13,
        gust: 2.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-24 09:00:00',
    },
    {
      dt: 1635076800,
      main: {
        temp: 299.06,
        feels_like: 299.25,
        temp_min: 299.06,
        temp_max: 299.06,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 956,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 60,
      },
      wind: {
        speed: 3.35,
        deg: 21,
        gust: 4.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-24 12:00:00',
    },
    {
      dt: 1635087600,
      main: {
        temp: 296.42,
        feels_like: 296.47,
        temp_min: 296.42,
        temp_max: 296.42,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 958,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.35,
        deg: 31,
        gust: 6.77,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-24 15:00:00',
    },
    {
      dt: 1635098400,
      main: {
        temp: 295.5,
        feels_like: 295.49,
        temp_min: 295.5,
        temp_max: 295.5,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 958,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.58,
        deg: 29,
        gust: 4.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-24 18:00:00',
    },
    {
      dt: 1635109200,
      main: {
        temp: 294.36,
        feels_like: 294.31,
        temp_min: 294.36,
        temp_max: 294.36,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 2.27,
        deg: 25,
        gust: 3.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-24 21:00:00',
    },
    {
      dt: 1635120000,
      main: {
        temp: 293.66,
        feels_like: 293.52,
        temp_min: 293.66,
        temp_max: 293.66,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 66,
      },
      wind: {
        speed: 2.29,
        deg: 33,
        gust: 3.88,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-25 00:00:00',
    },
    {
      dt: 1635130800,
      main: {
        temp: 296.83,
        feels_like: 296.77,
        temp_min: 296.83,
        temp_max: 296.83,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 959,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 3.72,
        deg: 42,
        gust: 5.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-25 03:00:00',
    },
    {
      dt: 1635141600,
      main: {
        temp: 300.82,
        feels_like: 300.86,
        temp_min: 300.82,
        temp_max: 300.82,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 958,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 4.42,
        deg: 44,
        gust: 5.49,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-25 06:00:00',
    },
    {
      dt: 1635152400,
      main: {
        temp: 301.78,
        feels_like: 301.39,
        temp_min: 301.78,
        temp_max: 301.78,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 955,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 4.61,
        deg: 31,
        gust: 5.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-25 09:00:00',
    },
    {
      dt: 1635163200,
      main: {
        temp: 298.05,
        feels_like: 298.14,
        temp_min: 298.05,
        temp_max: 298.05,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 955,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 3.38,
        deg: 32,
        gust: 4.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-25 12:00:00',
    },
    {
      dt: 1635174000,
      main: {
        temp: 295.56,
        feels_like: 295.63,
        temp_min: 295.56,
        temp_max: 295.56,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 957,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 2.69,
        deg: 34,
        gust: 3.99,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-25 15:00:00',
    },
    {
      dt: 1635184800,
      main: {
        temp: 294.19,
        feels_like: 294.28,
        temp_min: 294.19,
        temp_max: 294.19,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 2.15,
        deg: 17,
        gust: 2.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-25 18:00:00',
    },
    {
      dt: 1635195600,
      main: {
        temp: 293.25,
        feels_like: 293.25,
        temp_min: 293.25,
        temp_max: 293.25,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 954,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.45,
        deg: 0,
        gust: 3.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-25 21:00:00',
    },
    {
      dt: 1635206400,
      main: {
        temp: 292.52,
        feels_like: 292.42,
        temp_min: 292.52,
        temp_max: 292.52,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 955,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.32,
        deg: 26,
        gust: 3.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-26 00:00:00',
    },
    {
      dt: 1635217200,
      main: {
        temp: 296.44,
        feels_like: 296.39,
        temp_min: 296.44,
        temp_max: 296.44,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 958,
        humidity: 60,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.38,
        deg: 47,
        gust: 5.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-26 03:00:00',
    },
    {
      dt: 1635228000,
      main: {
        temp: 300.33,
        feels_like: 300.81,
        temp_min: 300.33,
        temp_max: 300.33,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 957,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 4.45,
        deg: 61,
        gust: 4.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-26 06:00:00',
    },
    {
      dt: 1635238800,
      main: {
        temp: 301.33,
        feels_like: 301.71,
        temp_min: 301.33,
        temp_max: 301.33,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 955,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 4.12,
        deg: 70,
        gust: 3.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-26 09:00:00',
    },
    {
      dt: 1635249600,
      main: {
        temp: 297.93,
        feels_like: 298.16,
        temp_min: 297.93,
        temp_max: 297.93,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 955,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 3.76,
        deg: 58,
        gust: 5.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-26 12:00:00',
    },
    {
      dt: 1635260400,
      main: {
        temp: 295.38,
        feels_like: 295.54,
        temp_min: 295.38,
        temp_max: 295.38,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 957,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.14,
        deg: 52,
        gust: 5.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-26 15:00:00',
    },
    {
      dt: 1635271200,
      main: {
        temp: 294.4,
        feels_like: 294.51,
        temp_min: 294.4,
        temp_max: 294.4,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02n',
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 2.38,
        deg: 45,
        gust: 3.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-26 18:00:00',
    },
    {
      dt: 1635282000,
      main: {
        temp: 293.59,
        feels_like: 293.6,
        temp_min: 293.59,
        temp_max: 293.59,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 955,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.24,
        deg: 38,
        gust: 3.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-26 21:00:00',
    },
    {
      dt: 1635292800,
      main: {
        temp: 292.65,
        feels_like: 292.59,
        temp_min: 292.65,
        temp_max: 292.65,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 956,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 2.28,
        deg: 46,
        gust: 3.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-10-27 00:00:00',
    },
    {
      dt: 1635303600,
      main: {
        temp: 296.28,
        feels_like: 296.27,
        temp_min: 296.28,
        temp_max: 296.28,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 958,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 3.84,
        deg: 56,
        gust: 6.14,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-10-27 03:00:00',
    },
  ],
  city: {
    id: 1269843,
    name: 'Hyderabad',
    coord: {
      lat: 17.3753,
      lon: 78.4744,
    },
    country: 'IN',
    population: 3597816,
    timezone: 19800,
    sunrise: 1634863253,
    sunset: 1634905199,
  },
};

export const MockFormattedResponse: WeatherDataModel[] = [
  {
    date: '2021-10-22 06:00:00',
    day: 'Friday',
    description: 'few clouds',
    image: 'assets/few-clouds.png',
    location: 'Hyderabad',
    min: 28,
    max: 29,
    temperature: 29,
  },
  {
    date: '2021-10-23 00:00:00',
    day: 'Saturday',
    description: 'scattered clouds',
    image: 'assets/cloudy.png',
    location: 'Hyderabad',
    min: 20,
    max: 20,
    temperature: 20,
  },
  {
    date: '2021-10-24 00:00:00',
    day: 'Sunday',
    description: 'scattered clouds',
    image: 'assets/cloudy.png',
    location: 'Hyderabad',
    min: 21,
    max: 21,
    temperature: 21,
  },
  {
    date: '2021-10-25 00:00:00',
    day: 'Monday',
    description: 'broken clouds',
    image: 'assets/strom.png',
    location: 'Hyderabad',
    min: 21,
    max: 21,
    temperature: 21,
  },
  {
    date: '2021-10-26 00:00:00',
    day: 'Tuesday',
    description: 'clear sky',
    image: 'assets/clear-sun.png',
    location: 'Hyderabad',
    min: 19,
    max: 19,
    temperature: 19,
  },
  {
    date: '2021-10-27 00:00:00',
    day: 'Wednesday',
    description: 'clear sky',
    image: 'assets/clear-sun.png',
    location: 'Hyderabad',
    min: 20,
    max: 20,
    temperature: 20,
  },
];