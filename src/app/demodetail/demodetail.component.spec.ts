import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodetailComponent } from './demodetail.component';

describe('DemodetailComponent', () => {
  let component: DemodetailComponent;
  let fixture: ComponentFixture<DemodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
