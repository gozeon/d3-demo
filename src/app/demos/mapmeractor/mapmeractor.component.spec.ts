import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmeractorComponent } from './mapmeractor.component';

describe('MapmeractorComponent', () => {
  let component: MapmeractorComponent;
  let fixture: ComponentFixture<MapmeractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmeractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapmeractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
