import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherAppSate } from 'src/app/store/weater-app-state';
import { getisError, getLoader } from 'src/app/store/weather-selector';
import * as weatherActions from '../../store/weather.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public searchText: string = '';
  public loading$!: Observable<boolean>;
  public isError$!: Observable<boolean>;
  public hasData$!: Observable<boolean>;
  constructor(private store: Store<{ weather: WeatherAppSate }>) {}

  ngOnInit() {
    this.loading$ = this.store.select(getLoader);
    this.isError$ = this.store.select(getisError);
  }

  search() {
    this.store.dispatch(new weatherActions.SetLoader({value: true}));
    this.store.dispatch(new weatherActions.GetWeatherData({loacation: this.searchText}));
    this.searchText = '';
  }
}
