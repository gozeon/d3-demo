import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinationsComponent } from './combinations.component';

describe('CombinationsComponent', () => {
  let component: CombinationsComponent;
  let fixture: ComponentFixture<CombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
