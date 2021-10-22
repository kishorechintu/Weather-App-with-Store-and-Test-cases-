import { TestBed } from '@angular/core/testing';
import { Action, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { take } from 'rxjs/operators';
import { weatherAppInitialState, WeatherAppSate } from './weater-app-state';
import { SetLoader } from './weather.actions';
import * as weatherAppActions from './weather.actions';

describe('WeatherApp Store Actions', () => {
  let mockStore: MockStore<{ weather: WeatherAppSate }>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          initialState: {
            weather: weatherAppInitialState,
          },
        }),
      ],
    });

    mockStore = TestBed.inject(Store) as any;
    spyOn(mockStore, 'dispatch').and.callThrough();
  });

  it('should dispatch setLoader action', (done) => {
    mockStore.dispatch(new SetLoader({ value: true }));
    mockStore.scannedActions$.pipe(take(1)).subscribe((action: Action) => {
      expect(action.type).toEqual(
        weatherAppActions.WeatherAppActions.SET_LOADER
      );
      done();
    });
  });

  it('should dispatch getWeather action', (done) => {
    mockStore.dispatch(
      new weatherAppActions.GetWeatherData({ loacation: 'hyderabad' })
    );
    mockStore.scannedActions$.pipe(take(1)).subscribe((action: Action) => {
      expect(action.type).toEqual(
        weatherAppActions.WeatherAppActions.GET_WEATHER_DATA
      );
      done();
    });
  });

  it('should dispatch doneLoadingWeatherdata action', (done) => {
    mockStore.dispatch(
      new weatherAppActions.DoneLoadingWeatherData({ weatherData: [] })
    );
    mockStore.scannedActions$.pipe(take(1)).subscribe((action: Action) => {
      expect(action.type).toEqual(
        weatherAppActions.WeatherAppActions.DONE_LOADING_WEATHER_DATA
      );
      done();
    });
  });

  it('should dispatch set isError action', (done) => {
    mockStore.dispatch(new weatherAppActions.IsError({ value: false }));
    mockStore.scannedActions$.pipe(take(1)).subscribe((action: Action) => {
      expect(action.type).toEqual(
        weatherAppActions.WeatherAppActions.SET_IS_ERROR
      );
      done();
    });
  });
});
