import { Action, createAction, props } from '@ngrx/store';
import { WeatherDataModel } from '../weather.model';

// export const getWeatherData = createAction(
//   'getWeatherData',
//   props<{ location: string }>()
// );

// export const doneLoadingWeatherData = createAction(
//   'doneLoadingWeatherData',
//   props<{ weatherData: WeatherDataModel[] }>()
// );

// export const setLoader = createAction(
//   'startLoader',
//   props<{ value: boolean }>()
// );
// export const setError = createAction('setError', props<{ value: boolean }>());

export enum WeatherAppActions {
   GET_WEATHER_DATA = '[Weaher APP] Get Weather Data',
   DONE_LOADING_WEATHER_DATA = '[Weaher APP] Done Loading Weather Data',
   SET_LOADER = '[Weather App] Set Loader State',
   SET_IS_ERROR= '[Weather App] Set Is Error State',
}


export class GetWeatherData implements Action {
  readonly type = WeatherAppActions.GET_WEATHER_DATA;
  constructor(public payload: {loacation: string}) {}
}

export class DoneLoadingWeatherData implements Action {
  readonly type = WeatherAppActions.DONE_LOADING_WEATHER_DATA;
  constructor(public payload: { weatherData: WeatherDataModel[]}) {}
}

export class SetLoader implements Action {
  readonly type = WeatherAppActions.SET_LOADER;
  constructor(public payload: {value: boolean}){}
}

export class IsError implements Action {
  readonly type = WeatherAppActions.SET_IS_ERROR;
  constructor(public payload: {value: boolean}){}
}