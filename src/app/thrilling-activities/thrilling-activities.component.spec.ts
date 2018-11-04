import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrillingActivitiesComponent } from './thrilling-activities.component';

describe('ThrillingActivitiesComponent', () => {
  let component: ThrillingActivitiesComponent;
  let fixture: ComponentFixture<ThrillingActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrillingActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrillingActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
