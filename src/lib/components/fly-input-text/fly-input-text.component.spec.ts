import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FlyInputTextComponent} from './fly-input-text.component';

describe('FlyInputTextComponent', () => {
    let component: FlyInputTextComponent;
    let fixture: ComponentFixture<FlyInputTextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlyInputTextComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlyInputTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
