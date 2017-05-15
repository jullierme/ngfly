import {
    AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit,
    ViewEncapsulation
} from '@angular/core';
import {FlyColspanInterface} from '../fly-colspan.interface';

@Component({
    selector: 'fly-input-text',
    templateUrl: './fly-input-text.component.html',
    styleUrls: ['./fly-input-text.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FlyInputTextComponent implements OnInit, AfterViewInit,
    AfterContentInit, AfterContentChecked, AfterViewChecked, FlyColspanInterface {

    constructor() {

    }

    ngAfterViewInit() {
        console.log('1 ngAfterViewInit');
    }

    ngAfterContentInit() {
        console.log('2 ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('3 ngAfterContentChecked');
    }

    ngAfterViewChecked() {
        console.log('4 ngAfterViewChecked');
    }

    ngOnInit() {
        console.log('criou input text');
    }

    defineClassColspan(): void {
        /*nothing yet*/
    }
}
