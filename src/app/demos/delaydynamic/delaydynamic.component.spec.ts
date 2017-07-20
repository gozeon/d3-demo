import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaydynamicComponent } from './delaydynamic.component';

describe('DelaydynamicComponent', () => {
  let component: DelaydynamicComponent;
  let fixture: ComponentFixture<DelaydynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaydynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaydynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
