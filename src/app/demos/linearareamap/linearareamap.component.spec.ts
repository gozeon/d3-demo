import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearareamapComponent } from './linearareamap.component';

describe('LinearareamapComponent', () => {
  let component: LinearareamapComponent;
  let fixture: ComponentFixture<LinearareamapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearareamapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearareamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
