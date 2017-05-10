import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FlyColspanInterface} from '../fly-colspan.interface';

@Component({
    selector: 'fly-input-text',
    templateUrl: './fly-input-text.component.html',
    styleUrls: ['./fly-input-text.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FlyInputTextComponent implements OnInit, FlyColspanInterface {

    constructor() {
    }

    ngOnInit() {
    }

    defineClassColspan() {
        /*nothing yet*/
    }
}
