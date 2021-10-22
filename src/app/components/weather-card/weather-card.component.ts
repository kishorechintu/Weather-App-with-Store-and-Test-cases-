import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatherAppSate } from 'src/app/store/weater-app-state';
import { getWeather } from 'src/app/store/weather-selector';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherCardComponent {
  constructor(private store: Store<{ weahter: WeatherAppSate }>) {}

  weatherData$ = this.store.select(getWeather);
}
