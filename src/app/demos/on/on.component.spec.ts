import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnComponent } from './on.component';

describe('OnComponent', () => {
  let component: OnComponent;
  let fixture: ComponentFixture<OnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
