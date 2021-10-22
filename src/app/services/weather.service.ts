import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherDataModel, WeatherResponseModel } from '../weather.model';
import { map } from 'rxjs/operators';
import { formatWeatherData } from '../components/UtilityClasses/utilities';

const API_KEY = 'c215f3c8ed73bd284c0ab3a5ea0a7351';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public weatherData: WeatherDataModel[] = [];
  constructor(private httpClient: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherDataModel[]> {
    let URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    return this.httpClient.get<WeatherResponseModel>(URL).pipe(
      map((data) => {
        return formatWeatherData(data);
      })
    );
  }
}
