import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import {FlyInputTextComponent} from './lib/components/fly-input-text/fly-input-text.component';
import {FlyLegendComponent} from './lib/components/fly-legend/fly-legend.component';
import {FlyHrComponent} from './lib/components/fly-hr/fly-hr.component';
import {FlyUppercaseInputDirective} from './lib/directives/fly-uppercase-input.directive';
import {FlyCpfPipe} from './lib/pipes/fly-cpf.pipe';
import {FlyService} from './lib/services/fly.service';
import {FlyUtilService} from './lib/services/fly-util.service';
import {FlyTabsetComponent} from './lib/components/fly-tabset/fly-tabset.component';
import {FlyTabComponent} from './lib/components/fly-tabset/fly-tab/fly-tab.component';

export * from './lib/components/fly-input-text/fly-input-text.component';
export * from './lib/components/fly-legend/fly-legend.component';
export * from './lib/components/fly-hr/fly-hr.component';
export * from './lib/directives/fly-uppercase-input.directive';
export * from './lib/components/fly-tabset/fly-tab/fly-tab.component';
export * from './lib/components/fly-tabset/fly-tabset.component';
export * from './lib/pipes/fly-cpf.pipe';
export * from './lib/services/fly.service';
export * from './lib/components/base/fly-abstract-ng-model';
export * from './lib/components/base/fly-base-input';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpModule
    ],
    declarations: [
        FlyInputTextComponent,
        FlyLegendComponent,
        FlyHrComponent,
        FlyTabsetComponent,
        FlyTabComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe
    ],
    exports: [
        FlyInputTextComponent,
        FlyLegendComponent,
        FlyHrComponent,
        FlyTabsetComponent,
        FlyTabComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe
    ],
    providers: [
        FlyUtilService,
        FlyService

    ]
})
export class NgFlyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgFlyModule,
            providers: [
                FlyUtilService,
                FlyService
            ]
        };
    }
}
