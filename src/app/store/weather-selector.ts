import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WeatherAppSate } from './weater-app-state';

export const getWeatherState = createFeatureSelector<WeatherAppSate>('weather');

export const getWeather = createSelector(getWeatherState, (state) => {
  return state.weatherData;
});

export const getLoader = createSelector(getWeatherState, (state) => {
  return state.isLoading;
});

export const getisError = createSelector(getWeatherState, (state)=>{
  return state.isError;
})