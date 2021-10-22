import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { WeatherService } from '../services/weather.service';
import { WeatherAppSate } from './weater-app-state';
import * as weatherActions from '../store/weather.actions';

@Injectable()
export class WeatherAppEffects {
  constructor(
    private actions$: Actions,
    private wrService: WeatherService,
    private _store: Store<{ weather: WeatherAppSate }>
  ) {}

  getWeatherData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.WeatherAppActions.GET_WEATHER_DATA),
      mergeMap((action: any) => {
        console.log(
          JSON.stringify(action)
        );
        return this.wrService.getWeatherData(action.payload.loacation).pipe(
          map((data) => {
            this._store.dispatch(
              new weatherActions.SetLoader({ value: false })
            );
            this._store.dispatch(new weatherActions.IsError({ value: false }));
            return new weatherActions.DoneLoadingWeatherData({
              weatherData: data,
            });
          }),
          catchError(() => {
            this._store.dispatch(
              new weatherActions.SetLoader({ value: false })
            );
            this._store.dispatch(new weatherActions.IsError({ value: true }));
            return of(
              new weatherActions.DoneLoadingWeatherData({ weatherData: [] })
            );
          })
        );
      })
    );
  });
}
