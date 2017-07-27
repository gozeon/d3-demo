import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathprojectionComponent } from './pathprojection.component';

describe('PathprojectionComponent', () => {
  let component: PathprojectionComponent;
  let fixture: ComponentFixture<PathprojectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathprojectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathprojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
