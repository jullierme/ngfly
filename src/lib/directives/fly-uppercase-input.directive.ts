import {Directive, ElementRef} from '@angular/core';

@Directive({ selector: '[flyUppercaseInput]' })
export class FlyUppercaseInputDirective {

    constructor(private elementRef: ElementRef) {
    }

}
