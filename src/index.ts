import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdDialogModule, MdSidenavModule, MdToolbarModule} from '@angular/material';

import 'hammerjs';

import {FlyInputTextComponent} from './lib/components/fly-input-text/fly-input-text.component';
import {FlyLegendComponent} from './lib/components/fly-legend/fly-legend.component';
import {FlyHrComponent} from './lib/components/fly-hr/fly-hr.component';
import {FlyUppercaseInputDirective} from './lib/directives/fly-uppercase-input.directive';
import {FlyCpfPipe} from './lib/pipes/fly-cpf.pipe';
import {FlyService} from './lib/services/fly.service';
import {FlyUtilService} from './lib/services/fly-util.service';
import {FlyAlertService} from './lib/components/fly-alert/fly-alert.service';
import {FlyTabsetComponent} from './lib/components/fly-tabset/fly-tabset.component';
import {FlyTabComponent} from './lib/components/fly-tabset/fly-tab/fly-tab.component';
import {FlyAlertYesNoComponent} from './lib/components/fly-alert/fly-alert-yes-no/fly-alert-yes-no.component';
import {FlyAlertOkComponent} from './lib/components/fly-alert/fly-alert-ok/fly-alert-ok.component';

export * from './lib/components/fly-input-text/fly-input-text.component';
export * from './lib/components/fly-legend/fly-legend.component';
export * from './lib/components/fly-hr/fly-hr.component';
export * from './lib/directives/fly-uppercase-input.directive';
export * from './lib/components/fly-tabset/fly-tab/fly-tab.component';
export * from './lib/components/fly-tabset/fly-tabset.component';
export * from './lib/components/fly-alert/fly-alert-ok/fly-alert-ok.component';
export * from './lib/components/fly-alert/fly-alert-yes-no/fly-alert-yes-no.component';
export * from './lib/pipes/fly-cpf.pipe';
export * from './lib/services/fly.service';
export * from './lib/components/base/fly-abstract-ng-model';
export * from './lib/components/base/fly-base-input';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,

        MdButtonModule,
        MdCardModule,
        MdToolbarModule,
        MdSidenavModule,
        MdDialogModule,
    ],
    declarations: [
        FlyInputTextComponent,
        FlyLegendComponent,
        FlyHrComponent,
        FlyTabsetComponent,
        FlyTabComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe,
        FlyAlertYesNoComponent,
        FlyAlertOkComponent
    ],
    exports: [
        FlyInputTextComponent,
        FlyLegendComponent,
        FlyHrComponent,
        FlyTabsetComponent,
        FlyTabComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe,
        FlyAlertYesNoComponent,
        FlyAlertOkComponent
    ],
    providers: [
        FlyUtilService,
        FlyAlertService,
        FlyService
    ]
})
export class NgFlyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgFlyModule,
            providers: [
                FlyUtilService,
                FlyAlertService,
                FlyService
            ]
        };
    }
}
