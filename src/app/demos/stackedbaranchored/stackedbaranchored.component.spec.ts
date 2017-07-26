import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedbaranchoredComponent } from './stackedbaranchored.component';

describe('StackedbaranchoredComponent', () => {
  let component: StackedbaranchoredComponent;
  let fixture: ComponentFixture<StackedbaranchoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedbaranchoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedbaranchoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
