import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineareachartComponent } from './lineareachart.component';

describe('LineareachartComponent', () => {
  let component: LineareachartComponent;
  let fixture: ComponentFixture<LineareachartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineareachartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineareachartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
