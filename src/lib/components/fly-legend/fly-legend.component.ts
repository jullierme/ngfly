import {ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FlyUtilService} from '../../services/fly-util.service';

@Component({
    selector: 'fly-legend',
    templateUrl: './fly-legend.component.html',
    styleUrls: ['./fly-legend.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlyLegendComponent implements OnInit {

    @Input() title: string;
    @Input() iconClass: string;
    @Input() colspan: string;

    private colspanClass: string;

    constructor(private flyUtilService: FlyUtilService) {
    }

    ngOnInit() {
        this.defineClassColspan();
    }

    private defineClassColspan() {
        this.colspanClass = this.flyUtilService.getColClass(this.colspan, 12);
    }

}
