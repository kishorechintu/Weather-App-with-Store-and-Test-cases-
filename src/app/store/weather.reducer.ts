import * as weatherActions from './weather.actions';
import { weatherAppInitialState, WeatherAppSate } from "./weater-app-state";


export function WeatherAppReducer(
  state = weatherAppInitialState,
  action: any
): WeatherAppSate {
  switch (action.type) {

    case weatherActions.WeatherAppActions.DONE_LOADING_WEATHER_DATA: {
      return {
        ...state,
       weatherData: action.payload.weatherData
      };
    }

    case weatherActions.WeatherAppActions.SET_LOADER: {
      return {
        ...state,
        isLoading: action.payload.value
      };
    }

    case weatherActions.WeatherAppActions.SET_IS_ERROR: {
      return {
        ...state,
        isError: action.payload.value
      };
    }
  }

  return state;
}
