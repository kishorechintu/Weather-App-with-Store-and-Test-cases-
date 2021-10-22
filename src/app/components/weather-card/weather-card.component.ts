import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherAppSate } from 'src/app/store/weater-app-state';
import { getWeather } from 'src/app/store/weather-selector';
import { WeatherDataModel } from 'src/app/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  public weatherData$!: Observable<WeatherDataModel[]>;

  constructor(private store: Store<{ weahter: WeatherAppSate }>) {}

  ngOnInit() {
    this.weatherData$ = this.store.select(getWeather);
  }
}
