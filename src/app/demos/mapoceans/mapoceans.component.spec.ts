import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoceansComponent } from './mapoceans.component';

describe('MapoceansComponent', () => {
  let component: MapoceansComponent;
  let fixture: ComponentFixture<MapoceansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapoceansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoceansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
