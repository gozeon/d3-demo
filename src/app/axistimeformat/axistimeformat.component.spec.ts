import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxistimeformatComponent } from './axistimeformat.component';

describe('AxistimeformatComponent', () => {
  let component: AxistimeformatComponent;
  let fixture: ComponentFixture<AxistimeformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxistimeformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxistimeformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
