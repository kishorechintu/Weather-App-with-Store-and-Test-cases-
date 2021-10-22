import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { MockFormattedResponse, mockWeatherResponse } from '../mockWeatherData';
import { WeatherDataModel, WeatherResponseModel } from '../weather.model';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WeatherService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getWeatherData should return expected data', (done) => {
    const URL =
      'https://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=c215f3c8ed73bd284c0ab3a5ea0a7351';
    const expectedData: WeatherResponseModel = mockWeatherResponse;
    let newdata!: WeatherDataModel[];
    service.getWeatherData('hyderabad').subscribe((data) => {
        newdata = data;
      done();
    });
    


    const testRequest = httpTestingController.expectOne(URL);
    testRequest.flush(expectedData);
    httpTestingController.verify();
    expect(newdata).toEqual(MockFormattedResponse);
    
  });

  // it('getWeatherData should use GET to retrieve data', () => {
  //   service.getWeatherData('Hyderabad').subscribe();

  //   const testRequest = httpTestingController.expectOne(
  //     'https://api.openweathermap.org/data/2.5/forecast?q=hyderabad&appid=c215f3c8ed73bd284c0ab3a5ea0a7351'
  //   );

  //   expect(testRequest.request.method).toEqual('GET');
  // });
});
