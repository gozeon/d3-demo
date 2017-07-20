import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerofdataroundedComponent } from './powerofdatarounded.component';

describe('PowerofdataroundedComponent', () => {
  let component: PowerofdataroundedComponent;
  let fixture: ComponentFixture<PowerofdataroundedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerofdataroundedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerofdataroundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
