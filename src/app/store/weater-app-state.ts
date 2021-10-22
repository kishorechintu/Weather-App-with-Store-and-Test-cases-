import { WeatherDataModel } from '../weather.model';

export interface WeatherAppSate {
  weatherData: WeatherDataModel[];
  isLoading: boolean;
  hasData: boolean;
  isError: boolean;
}
export const weatherAppInitialState: WeatherAppSate = {
  weatherData: [],
  isLoading: false,
  hasData: false,
  isError: false,
};
