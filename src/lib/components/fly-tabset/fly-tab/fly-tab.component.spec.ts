import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FlyTabComponent} from './fly-tab.component';

describe('FlyTabComponent', () => {
    let component: FlyTabComponent;
    let fixture: ComponentFixture<FlyTabComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FlyTabComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FlyTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create FlyTabComponent', () => {
        expect(component).toBeTruthy();
    });
});
