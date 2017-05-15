import {
    AfterContentInit,
    Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {FlyTabComponent} from './fly-tab/fly-tab.component';
import {FlyColspanInterface} from '../fly-colspan.interface';
import {FlyUtilService} from '../../services/fly-util.service';

@Component({
    selector: 'fly-tabset',
    templateUrl: './fly-tabset.component.html',
    styleUrls: ['./fly-tabset.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class FlyTabsetComponent implements AfterContentInit, OnInit, FlyColspanInterface {

    /*
     https://juristr.com/blog/2016/02/learning-ng2-creating-tab-component/
     https://embed.plnkr.co/0YKxZl3KksWy2lRRta6x/
     https://plnkr.co/edit/afhLA8wHw9LRnzwwTT3M?p=preview
     */
    @ContentChildren(FlyTabComponent) tabs: QueryList<FlyTabComponent>;

    @Input() vertical: boolean;
    @Input() justified: boolean;
    @Input() type: string;
    @Input() color: string;
    @Input() colspan: number;
    private _selectedIndex: number;

    @Output() public select: EventEmitter<any> = new EventEmitter();

    private classColor: string;
    private classColspan: string;

    constructor(private flyUtilService: FlyUtilService) {
    }

    ngOnInit() {
        this.defineClassColor();
        this.defineClassColspan();
    }

    defineClassColor() {
        this.classColor = 'nav-tabs-' + (this.color ? this.color : 'light-blue');
    }

    defineClassColspan() {
        this.classColspan = this.flyUtilService.getColClass(this.colspan, 12);
    }

    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
            this._selectedIndex = 0;
        }

        this.setDefaultValuesOnTab();
    }


    forceSetSelectedIndex(tab: FlyTabComponent) {
        this._selectedIndex = this.tabs.toArray().indexOf(tab);
    }

    setDefaultValuesOnTab() {
        let tabsArray = this.tabs.toArray();

        for (let i = 0, y = tabsArray.length; i < y; i++) {
            tabsArray[i].flyTabsetInstance = this;
        }
    }

    private selectTab(tab: FlyTabComponent) {
        if (this.flyUtilService.isTrue(tab.disabled)) {
            return;
        }
        // deactivate all tabs
        this.tabs.toArray().forEach(tabInstance => tabInstance.active = false);

        this._selectedIndex = this.tabs.toArray().indexOf(tab);

        tab.active = true;

        this.select.emit(tab);
    }

    @Input()
    public get selectedIndex() {
        return this._selectedIndex;
    }

    public set selectedIndex(index) {
        if (this.tabs && this.tabs.length > index) {
            this.selectTab(this.tabs.toArray()[index]);
        }
    }

    /*
     selectTab(index: number) {
     this._selectTab(this.tabs.toArray()[index]);
     }

     disableTab(index: number) {
     this.tabs.toArray()[index].disabled = true;
     }

     enableTab(index: number) {
     this.tabs.toArray()[index].disabled = false;
     }

     getTabs(): QueryList<FlyTabComponent> {
     return this.tabs;
     }*/
}
