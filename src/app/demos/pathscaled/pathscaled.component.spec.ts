import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathscaledComponent } from './pathscaled.component';

describe('PathscaledComponent', () => {
  let component: PathscaledComponent;
  let fixture: ComponentFixture<PathscaledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathscaledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathscaledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
