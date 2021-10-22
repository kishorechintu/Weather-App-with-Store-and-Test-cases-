import { Action } from '@ngrx/store';
import { WeatherDataModel } from '../weather.model';

export enum WeatherAppActions {
  GET_WEATHER_DATA = '[Weaher APP] Get Weather Data',
  DONE_LOADING_WEATHER_DATA = '[Weaher APP] Done Loading Weather Data',
  SET_LOADER = '[Weather App] Set Loader State',
  SET_IS_ERROR = '[Weather App] Set Is Error State',
}

export class GetWeatherData implements Action {
  readonly type = WeatherAppActions.GET_WEATHER_DATA;
  constructor(public payload: { loacation: string }) {}
}

export class DoneLoadingWeatherData implements Action {
  readonly type = WeatherAppActions.DONE_LOADING_WEATHER_DATA;
  constructor(public payload: { weatherData: WeatherDataModel[] }) {}
}

export class SetLoader implements Action {
  readonly type = WeatherAppActions.SET_LOADER;
  constructor(public payload: { value: boolean }) {}
}

export class IsError implements Action {
  readonly type = WeatherAppActions.SET_IS_ERROR;
  constructor(public payload: { value: boolean }) {}
}
