import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyAlertYesNoComponent } from './fly-alert-yes-no.component';

describe('FlyAlertYesNoComponent', () => {
  let component: FlyAlertYesNoComponent;
  let fixture: ComponentFixture<FlyAlertYesNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyAlertYesNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyAlertYesNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
