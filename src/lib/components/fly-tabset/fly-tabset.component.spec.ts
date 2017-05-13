import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyTabsetComponent } from './fly-tabset.component';

describe('FlyTabsetComponent', () => {
  let component: FlyTabsetComponent;
  let fixture: ComponentFixture<FlyTabsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyTabsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyTabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
