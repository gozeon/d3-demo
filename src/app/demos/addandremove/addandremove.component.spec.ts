import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddandremoveComponent } from './addandremove.component';

describe('AddandremoveComponent', () => {
  let component: AddandremoveComponent;
  let fixture: ComponentFixture<AddandremoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddandremoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddandremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
