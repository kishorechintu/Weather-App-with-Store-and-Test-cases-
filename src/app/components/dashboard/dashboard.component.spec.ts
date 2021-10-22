import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { WeatherAppSate } from 'src/app/store/weater-app-state';
import { DashboardComponent } from './dashboard.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: MockStore;
  const initialState = {
    weatherData: [],
    isLoading: false,
    hasData: false,
    isError: false,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoutld dispatch getData action on search method', () => {
    component.search();
    fixture.detectChanges();
    const spyDispatch = spyOn(store, 'dispatch');
   
  });

  class StoreMock {
    // How we did it before
    select = jasmine.createSpy().and.returnValue(of());
    dispatch = jasmine.createSpy();
  }
});
