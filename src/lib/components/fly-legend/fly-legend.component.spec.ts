import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlyLegendComponent} from './fly-legend.component';

describe('FlyLegendComponent', () => {
    let component: FlyLegendComponent;
    let fixture: ComponentFixture<FlyLegendComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlyLegendComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlyLegendComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
