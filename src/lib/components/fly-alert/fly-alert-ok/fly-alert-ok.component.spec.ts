import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyAlertOkComponent } from './fly-alert-ok.component';

describe('FlyAlertOkComponent', () => {
  let component: FlyAlertOkComponent;
  let fixture: ComponentFixture<FlyAlertOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyAlertOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyAlertOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
