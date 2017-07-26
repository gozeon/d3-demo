import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedareaComponent } from './stackedarea.component';

describe('StackedareaComponent', () => {
  let component: StackedareaComponent;
  let fixture: ComponentFixture<StackedareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
