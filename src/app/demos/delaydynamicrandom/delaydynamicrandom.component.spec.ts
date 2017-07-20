import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaydynamicrandomComponent } from './delaydynamicrandom.component';

describe('DelaydynamicrandomComponent', () => {
  let component: DelaydynamicrandomComponent;
  let fixture: ComponentFixture<DelaydynamicrandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaydynamicrandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaydynamicrandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
