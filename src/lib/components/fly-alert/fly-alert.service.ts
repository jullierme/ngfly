import {Injectable} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Observable} from 'rxjs/Observable';

import {FlyAlertYesNoComponent} from './fly-alert-yes-no/fly-alert-yes-no.component';
import {FlyAlertOkComponent} from './fly-alert-ok/fly-alert-ok.component';

@Injectable()
export class FlyAlertService {

    constructor(public mdDialog: MdDialog) {}

    showOk(message: string, title: string): Observable<any> {
        return this.mdDialog.open(FlyAlertOkComponent, {
            data: {
                message: message,
                title: title
            }
        });
    }

    confirm(message: string, title: string): Observable<any> {
        return this.mdDialog.open(FlyAlertYesNoComponent, {
            data: {
                message: message,
                title: title
            }
        });
    }
}
