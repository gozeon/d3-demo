import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxesscatterplotComponent } from './axesscatterplot.component';

describe('AxesscatterplotComponent', () => {
  let component: AxesscatterplotComponent;
  let fixture: ComponentFixture<AxesscatterplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxesscatterplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxesscatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
