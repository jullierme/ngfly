import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
    selector: 'fly-alert-ok',
    templateUrl: './fly-alert-ok.component.html',
    styleUrls: ['./fly-alert-ok.component.css']
})
export class FlyAlertOkComponent implements OnInit {

    constructor(@Inject(MD_DIALOG_DATA) public data: any,
                public dialogRef: MdDialogRef<FlyAlertOkComponent>) {
    }

    ngOnInit() {
    }

}
