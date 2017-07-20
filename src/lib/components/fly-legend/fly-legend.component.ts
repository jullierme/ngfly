import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FlyUtilService} from '../../services/fly-util.service';
import {FlyColspanInterface} from '../base/interface/fly-colspan.interface';

@Component({
    selector: 'fly-legend',
    templateUrl: './fly-legend.component.html',
    styleUrls: ['./fly-legend.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FlyLegendComponent implements OnInit, FlyColspanInterface {

    @Input() heading: string;
    @Input() iconClass: string;
    @Input() colspan: string;

    private colspanClass: string;

    constructor(private flyUtilService: FlyUtilService) {
    }

    ngOnInit() {
        this.defineClassColspan();
    }

    defineClassColspan() {
        this.colspanClass = this.flyUtilService.getColClass(this.colspan, 12);
    }

}
