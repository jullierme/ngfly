import {EventEmitter, Input, OnInit, Output} from '@angular/core';

import {FlyAbstractNgModel} from './fly-abstract-ng-model';
import {FlyColspanInterface} from './interface/fly-colspan.interface';
import {FlyUtilService} from '../../services/fly-util.service';

export abstract class FlyBaseInput extends FlyAbstractNgModel implements FlyColspanInterface, OnInit {
    public classColspan: string;
    public hasFocus: boolean;
    @Input() colspan: string;


    @Output() focus: EventEmitter<Object> = new EventEmitter<Object>();
    @Output() blur: EventEmitter<Object> = new EventEmitter<Object>();
    @Output() keyup: EventEmitter<Object> = new EventEmitter<Object>();
    @Output() keydown: EventEmitter<Object> = new EventEmitter<Object>();
    @Output() change: EventEmitter<Object> = new EventEmitter<Object>();

    constructor(private _flyUtilService: FlyUtilService) {
        super();
    }

    ngOnInit() {
        this.defineClassColspan();
    }

    defineClassColspan() {
        this.classColspan = this._flyUtilService.getColClass(this.colspan, 12);
    }

    _blur($event) {
        this.hasFocus = false;
        this.blur.next($event);
    }

    _focus($event) {
        this.hasFocus = true;
        this.focus.next($event);
    }

    _keyup($event) {
        //this.keyup.next($event);
    }

    _keydown($event) {
        //this.keydown.next($event);
    }

    _change($event) {
        //this.change.next($event);
    }
}