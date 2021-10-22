import { weatherAppInitialState } from './weater-app-state';
import { WeatherAppReducer } from './weather.reducer';
import * as weatherAppActions from './weather.actions';

describe('WeatherAppReducer', () => {
  it('should set loader state', (done) => {
    const result = WeatherAppReducer(
      weatherAppInitialState,
      new weatherAppActions.SetLoader({ value: true })
    );
    expect(result.isLoading).toEqual(true);
    done();
  });

  it('set weatherdata on doneLoadingAction called ', (done) => {
    const result = WeatherAppReducer(
      weatherAppInitialState,
      new weatherAppActions.DoneLoadingWeatherData({ weatherData: [] })
    );
    expect(result.weatherData).toEqual([]);
    done();
  });

  it('should set isError state', (done) => {
    const result = WeatherAppReducer(
      weatherAppInitialState,
      new weatherAppActions.IsError({ value: true })
    );
    expect(result.isError).toEqual(true);
    done();
  });

  it('should return default state', (done) => {
    const result = WeatherAppReducer(weatherAppInitialState, '');
    expect(result).toEqual(weatherAppInitialState);
    done();
  });
});
