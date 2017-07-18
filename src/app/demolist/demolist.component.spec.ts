import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemolistComponent } from './demolist.component';

describe('DemolistComponent', () => {
  let component: DemolistComponent;
  let fixture: ComponentFixture<DemolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
