import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitiondurationComponent } from './transitionduration.component';

describe('TransitiondurationComponent', () => {
  let component: TransitiondurationComponent;
  let fixture: ComponentFixture<TransitiondurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitiondurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitiondurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
