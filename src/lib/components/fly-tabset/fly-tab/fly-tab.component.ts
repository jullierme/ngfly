import {
    Component,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
    EventEmitter
} from '@angular/core';
import {FlyUtilService} from '../../../services/fly-util.service';
import {FlyTabsetComponent} from '../../fly-tabset/fly-tabset.component';

@Component({
    selector: 'fly-tab',
    templateUrl: './fly-tab.component.html',
    styleUrls: ['./fly-tab.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FlyTabComponent implements OnInit {
    private _active: boolean;

    public flyTabsetInstance: FlyTabsetComponent;

    @Input() lazy: boolean;
    @Input() required: boolean;
    @Input() heading: string;
    @Input() iconClass: string;
    @Input() disabled: boolean;

    @Output() public select: EventEmitter<any> = new EventEmitter();

    constructor(private flyUtilService: FlyUtilService) {
    }

    ngOnInit() {
    }

    @Input()
    public get active() {
        return this._active;
    }ng

    public set active(active) {
        if (!this.flyUtilService.isTrue(this.disabled)) {
            this._active = active;
        }

        if (this.flyUtilService.isTrue(active)) {
            this.lazy = false;

            this.select.emit(this);

            //if (this.flyTabsetInstance) {
            //    this.flyTabsetInstance.forceSetSelectedIndex(this);
            //}
        }
    }
}
