import Details from "../components/Details";
import NavBar from "../components/NavBar";
import Today from "../components/Today";
import Weekly from "../components/Weekly";
import { useStateContext } from "../context/StateContext";
import useWeather from "../customHook/useWeather";
import images from "../constants/images";

const items = [
  {
    text: "Temperature",
    logo: images.temperatureLogo,
  },
  {
    text: "Wind",
    logo: images.windLogo,
  },
  {
    text: "Precipitation",
    logo: images.precipitationLogo,
  },
  {
    text: "Humidity",
    logo: images.humidityLogo,
  },
];
const Home = () => {
  const { result } = useStateContext();
  // const [weather, weatherStatus] = useWeather(
  //   result.latitude,
  //   result.longitude,
  // );

const weather = [
  {
    coord: {
      lon: -73.9249,
      lat: 40.6943,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 27.95,
      feels_like: 30.07,
      temp_min: 25.49,
      temp_max: 30.27,
      pressure: 1012,
      humidity: 66,
      sea_level: 1012,
      grnd_level: 1011,
    },
    visibility: 10000,
    wind: {
      speed: 3.13,
      deg: 212,
      gust: 4.02,
    },
    clouds: {
      all: 0,
    },
    dt: 1720122662,
    sys: {
      type: 2,
      id: 2076559,
      country: "US",
      sunrise: 1720085403,
      sunset: 1720139400,
    },
    timezone: -14400,
    id: 5112738,
    name: "City Line",
    cod: 200,
  },
  {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1720126800,
        main: {
          temp: 28.46,
          feels_like: 30.69,
          temp_min: 25.32,
          temp_max: 28.46,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 64,
          temp_kf: 3.14,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 4.39,
          deg: 166,
          gust: 5.06,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 0.94,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-04 21:00:00",
      },
      {
        dt: 1720137600,
        main: {
          temp: 27.23,
          feels_like: 29.34,
          temp_min: 24.78,
          temp_max: 27.23,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 71,
          temp_kf: 2.45,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 27,
        },
        wind: {
          speed: 3.75,
          deg: 171,
          gust: 4.96,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 2.45,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-05 00:00:00",
      },
      {
        dt: 1720148400,
        main: {
          temp: 25.41,
          feels_like: 26.12,
          temp_min: 23.88,
          temp_max: 25.41,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 81,
          temp_kf: 1.53,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 65,
        },
        wind: {
          speed: 3.73,
          deg: 190,
          gust: 6.75,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.12,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-05 03:00:00",
      },
      {
        dt: 1720159200,
        main: {
          temp: 22.97,
          feels_like: 23.86,
          temp_min: 22.97,
          temp_max: 22.97,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 97,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 98,
        },
        wind: {
          speed: 3.48,
          deg: 205,
          gust: 5.82,
        },
        visibility: 6036,
        pop: 1,
        rain: {
          "3h": 3.88,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-05 06:00:00",
      },
      {
        dt: 1720170000,
        main: {
          temp: 23.21,
          feels_like: 24.09,
          temp_min: 23.21,
          temp_max: 23.21,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1008,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.59,
          deg: 214,
          gust: 6.42,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 3.56,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-05 09:00:00",
      },
      {
        dt: 1720180800,
        main: {
          temp: 23.22,
          feels_like: 24.05,
          temp_min: 23.22,
          temp_max: 23.22,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 94,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.49,
          deg: 202,
          gust: 3.71,
        },
        visibility: 9050,
        pop: 1,
        rain: {
          "3h": 1.92,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-05 12:00:00",
      },
      {
        dt: 1720191600,
        main: {
          temp: 26.12,
          feels_like: 26.12,
          temp_min: 26.12,
          temp_max: 26.12,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 3.46,
          deg: 195,
          gust: 4.93,
        },
        visibility: 10000,
        pop: 0.3,
        rain: {
          "3h": 0.29,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-05 15:00:00",
      },
      {
        dt: 1720202400,
        main: {
          temp: 28.76,
          feels_like: 31.87,
          temp_min: 28.76,
          temp_max: 28.76,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1008,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.4,
          deg: 168,
          gust: 5.31,
        },
        visibility: 10000,
        pop: 0.68,
        rain: {
          "3h": 1.29,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-05 18:00:00",
      },
      {
        dt: 1720213200,
        main: {
          temp: 27.31,
          feels_like: 29.59,
          temp_min: 27.31,
          temp_max: 27.31,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 1007,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 6.68,
          deg: 163,
          gust: 8.45,
        },
        visibility: 10000,
        pop: 0.33,
        rain: {
          "3h": 0.15,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-05 21:00:00",
      },
      {
        dt: 1720224000,
        main: {
          temp: 25.14,
          feels_like: 25.85,
          temp_min: 25.14,
          temp_max: 25.14,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 1007,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 94,
        },
        wind: {
          speed: 4.96,
          deg: 175,
          gust: 7.2,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-06 00:00:00",
      },
      {
        dt: 1720234800,
        main: {
          temp: 24.86,
          feels_like: 25.59,
          temp_min: 24.86,
          temp_max: 24.86,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 84,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 83,
        },
        wind: {
          speed: 4.52,
          deg: 185,
          gust: 9.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-06 03:00:00",
      },
      {
        dt: 1720245600,
        main: {
          temp: 24.09,
          feels_like: 24.85,
          temp_min: 24.09,
          temp_max: 24.09,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1008,
          humidity: 88,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 89,
        },
        wind: {
          speed: 2.8,
          deg: 202,
          gust: 7.19,
        },
        visibility: 10000,
        pop: 0.25,
        rain: {
          "3h": 0.32,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-06 06:00:00",
      },
      {
        dt: 1720256400,
        main: {
          temp: 23.53,
          feels_like: 24.34,
          temp_min: 23.53,
          temp_max: 23.53,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.29,
          deg: 176,
          gust: 5.68,
        },
        visibility: 10000,
        pop: 0.95,
        rain: {
          "3h": 0.68,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-06 09:00:00",
      },
      {
        dt: 1720267200,
        main: {
          temp: 24.18,
          feels_like: 25.06,
          temp_min: 24.18,
          temp_max: 24.18,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 95,
        },
        wind: {
          speed: 4.12,
          deg: 197,
          gust: 6.84,
        },
        visibility: 6541,
        pop: 1,
        rain: {
          "3h": 3.87,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-06 12:00:00",
      },
      {
        dt: 1720278000,
        main: {
          temp: 24.62,
          feels_like: 25.51,
          temp_min: 24.62,
          temp_max: 24.62,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 91,
          temp_kf: 0,
        },
        weather: [
          {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 2.85,
          deg: 183,
          gust: 5.1,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 3.35,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-06 15:00:00",
      },
      {
        dt: 1720288800,
        main: {
          temp: 24.31,
          feels_like: 25.15,
          temp_min: 24.31,
          temp_max: 24.31,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 4.14,
          deg: 160,
          gust: 5.77,
        },
        visibility: 10000,
        pop: 0.8,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-06 18:00:00",
      },
      {
        dt: 1720299600,
        main: {
          temp: 26.52,
          feels_like: 26.52,
          temp_min: 26.52,
          temp_max: 26.52,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 1009,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 87,
        },
        wind: {
          speed: 5.68,
          deg: 163,
          gust: 7.66,
        },
        visibility: 10000,
        pop: 0.39,
        rain: {
          "3h": 0.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-06 21:00:00",
      },
      {
        dt: 1720310400,
        main: {
          temp: 24.46,
          feels_like: 25.31,
          temp_min: 24.46,
          temp_max: 24.46,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 1010,
          humidity: 90,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
          },
        ],
        clouds: {
          all: 84,
        },
        wind: {
          speed: 4.94,
          deg: 180,
          gust: 7.44,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.13,
        },
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-07 00:00:00",
      },
      {
        dt: 1720321200,
        main: {
          temp: 23.77,
          feels_like: 24.68,
          temp_min: 23.77,
          temp_max: 23.77,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 95,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 43,
        },
        wind: {
          speed: 4.17,
          deg: 176,
          gust: 7.34,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.08,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-07 03:00:00",
      },
      {
        dt: 1720332000,
        main: {
          temp: 23.16,
          feels_like: 24.04,
          temp_min: 23.16,
          temp_max: 23.16,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 96,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 72,
        },
        wind: {
          speed: 4.32,
          deg: 196,
          gust: 7.82,
        },
        visibility: 10000,
        pop: 1,
        rain: {
          "3h": 1.8,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-07 06:00:00",
      },
      {
        dt: 1720342800,
        main: {
          temp: 23.57,
          feels_like: 24.38,
          temp_min: 23.57,
          temp_max: 23.57,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 1011,
          humidity: 92,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.11,
          deg: 255,
          gust: 2.73,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-07 09:00:00",
      },
      {
        dt: 1720353600,
        main: {
          temp: 24.75,
          feels_like: 25.21,
          temp_min: 24.75,
          temp_max: 24.75,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1013,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.27,
          deg: 328,
          gust: 3.2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-07 12:00:00",
      },
      {
        dt: 1720364400,
        main: {
          temp: 29.06,
          feels_like: 29.86,
          temp_min: 29.06,
          temp_max: 29.06,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1014,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 2.33,
          deg: 292,
          gust: 3.02,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-07 15:00:00",
      },
      {
        dt: 1720375200,
        main: {
          temp: 31.66,
          feels_like: 31.97,
          temp_min: 31.66,
          temp_max: 31.66,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1013,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 3.54,
          deg: 225,
          gust: 4.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-07 18:00:00",
      },
      {
        dt: 1720386000,
        main: {
          temp: 31.57,
          feels_like: 31.84,
          temp_min: 31.57,
          temp_max: 31.57,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 1013,
          humidity: 41,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 4.92,
          deg: 204,
          gust: 5.41,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-07 21:00:00",
      },
      {
        dt: 1720396800,
        main: {
          temp: 26.76,
          feels_like: 28.04,
          temp_min: 26.76,
          temp_max: 26.76,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1014,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 5.4,
          deg: 188,
          gust: 8.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-08 00:00:00",
      },
      {
        dt: 1720407600,
        main: {
          temp: 25.72,
          feels_like: 26.15,
          temp_min: 25.72,
          temp_max: 25.72,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 2.91,
          deg: 193,
          gust: 5.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-08 03:00:00",
      },
      {
        dt: 1720418400,
        main: {
          temp: 25.01,
          feels_like: 25.47,
          temp_min: 25.01,
          temp_max: 25.01,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 88,
        },
        wind: {
          speed: 0.18,
          deg: 164,
          gust: 0.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-08 06:00:00",
      },
      {
        dt: 1720429200,
        main: {
          temp: 24.22,
          feels_like: 24.63,
          temp_min: 24.22,
          temp_max: 24.22,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1016,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 44,
        },
        wind: {
          speed: 0.97,
          deg: 14,
          gust: 1.22,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-08 09:00:00",
      },
      {
        dt: 1720440000,
        main: {
          temp: 25.55,
          feels_like: 25.91,
          temp_min: 25.55,
          temp_max: 25.55,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1017,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 59,
        },
        wind: {
          speed: 1.36,
          deg: 336,
          gust: 1.4,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-08 12:00:00",
      },
      {
        dt: 1720450800,
        main: {
          temp: 29.65,
          feels_like: 30.69,
          temp_min: 29.65,
          temp_max: 29.65,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1017,
          humidity: 51,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.98,
          deg: 231,
          gust: 1.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-08 15:00:00",
      },
      {
        dt: 1720461600,
        main: {
          temp: 30.74,
          feels_like: 31.32,
          temp_min: 30.74,
          temp_max: 30.74,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1016,
          humidity: 45,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 83,
        },
        wind: {
          speed: 4.61,
          deg: 178,
          gust: 3.15,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-08 18:00:00",
      },
      {
        dt: 1720472400,
        main: {
          temp: 29,
          feels_like: 30.88,
          temp_min: 29,
          temp_max: 29,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 59,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 14,
        },
        wind: {
          speed: 6.49,
          deg: 164,
          gust: 6.33,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-08 21:00:00",
      },
      {
        dt: 1720483200,
        main: {
          temp: 26.31,
          feels_like: 26.31,
          temp_min: 26.31,
          temp_max: 26.31,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 23,
        },
        wind: {
          speed: 5.68,
          deg: 170,
          gust: 8.89,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-09 00:00:00",
      },
      {
        dt: 1720494000,
        main: {
          temp: 25.04,
          feels_like: 25.69,
          temp_min: 25.04,
          temp_max: 25.04,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1016,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 11,
        },
        wind: {
          speed: 4.9,
          deg: 184,
          gust: 8.51,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-09 03:00:00",
      },
      {
        dt: 1720504800,
        main: {
          temp: 24.34,
          feels_like: 24.97,
          temp_min: 24.34,
          temp_max: 24.34,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1016,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 33,
        },
        wind: {
          speed: 3.61,
          deg: 206,
          gust: 7.75,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-09 06:00:00",
      },
      {
        dt: 1720515600,
        main: {
          temp: 23.47,
          feels_like: 24.14,
          temp_min: 23.47,
          temp_max: 23.47,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 87,
          temp_kf: 0,
        },
        weather: [
          {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10n",
          },
        ],
        clouds: {
          all: 47,
        },
        wind: {
          speed: 2.96,
          deg: 210,
          gust: 6.17,
        },
        visibility: 10000,
        pop: 0.95,
        rain: {
          "3h": 0.86,
        },
        sys: {
          pod: "n",
        },
        dt_txt: "2024-07-09 09:00:00",
      },
      {
        dt: 1720526400,
        main: {
          temp: 24.89,
          feels_like: 25.47,
          temp_min: 24.89,
          temp_max: 24.89,
          pressure: 1017,
          sea_level: 1017,
          grnd_level: 1015,
          humidity: 78,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 52,
        },
        wind: {
          speed: 3.35,
          deg: 203,
          gust: 4.69,
        },
        visibility: 10000,
        pop: 0.68,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-09 12:00:00",
      },
      {
        dt: 1720537200,
        main: {
          temp: 27.96,
          feels_like: 29.73,
          temp_min: 27.96,
          temp_max: 27.96,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1015,
          humidity: 63,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 73,
        },
        wind: {
          speed: 4.4,
          deg: 171,
          gust: 5.24,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-09 15:00:00",
      },
      {
        dt: 1720548000,
        main: {
          temp: 29.19,
          feels_like: 30.89,
          temp_min: 29.19,
          temp_max: 29.19,
          pressure: 1015,
          sea_level: 1015,
          grnd_level: 1014,
          humidity: 57,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 71,
        },
        wind: {
          speed: 5.99,
          deg: 161,
          gust: 6.12,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-07-09 18:00:00",
      },
    ],
    city: {
      id: 5112738,
      name: "City Line",
      coord: {
        lat: 40.6943,
        lon: -73.9249,
      },
      country: "US",
      population: 0,
      timezone: -14400,
      sunrise: 1720085403,
      sunset: 1720139400,
    },
  },
];
  // if (weatherStatus === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (weatherStatus === "error" || !weather[1]) {
  //   return <div>Error loading weather data</div>;
  // }
  return (
    <div className="border-box">
      <NavBar />
      {result ? (
        <div>
          <Today weather={weather[0]} />
          <Details weather={weather[1]} items={items} />
          <Weekly weather={weather[1]} />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
