import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyHrComponent } from './fly-hr.component';

describe('FlyHrComponent', () => {
  let component: FlyHrComponent;
  let fixture: ComponentFixture<FlyHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
