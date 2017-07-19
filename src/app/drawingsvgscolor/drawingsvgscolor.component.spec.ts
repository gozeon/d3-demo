import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingsvgscolorComponent } from './drawingsvgscolor.component';

describe('DrawingsvgscolorComponent', () => {
  let component: DrawingsvgscolorComponent;
  let fixture: ComponentFixture<DrawingsvgscolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingsvgscolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingsvgscolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
