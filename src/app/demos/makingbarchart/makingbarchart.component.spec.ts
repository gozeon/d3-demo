import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakingbarchartComponent } from './makingbarchart.component';

describe('MakingbarchartComponent', () => {
  let component: MakingbarchartComponent;
  let fixture: ComponentFixture<MakingbarchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakingbarchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakingbarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
