import { weatherAppInitialState } from './weater-app-state';
import * as weatherSelectors from './weather-selector';
describe('WeatherApp Selectors', () => {
  it('should select getWeather', () => {
    const state = {
      weather: weatherAppInitialState,
    };
    const result = weatherSelectors.getWeatherState(state);
    expect(result).toBe(state.weather);
  });

  it('should select loader state', () => {
    const state = {
      weather: weatherAppInitialState,
    };
    const result = weatherSelectors.getLoader(state);
    expect(result).toBe(state.weather.isLoading);
  });

  it('should select isError state', () => {
    const state = {
      weather: weatherAppInitialState,
    };
    const result = weatherSelectors.getisError(state);
    expect(result).toBe(state.weather.isError);
  });
});
