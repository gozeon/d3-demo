import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisscatterplotdynamicComponent } from './axisscatterplotdynamic.component';

describe('AxisscatterplotdynamicComponent', () => {
  let component: AxisscatterplotdynamicComponent;
  let fixture: ComponentFixture<AxisscatterplotdynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisscatterplotdynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisscatterplotdynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
