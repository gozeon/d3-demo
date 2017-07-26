import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcedraggableComponent } from './forcedraggable.component';

describe('ForcedraggableComponent', () => {
  let component: ForcedraggableComponent;
  let fixture: ComponentFixture<ForcedraggableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcedraggableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcedraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
