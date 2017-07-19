import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxistimeComponent } from './axistime.component';

describe('AxistimeComponent', () => {
  let component: AxistimeComponent;
  let fixture: ComponentFixture<AxistimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxistimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxistimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
