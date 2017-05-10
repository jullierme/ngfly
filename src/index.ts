import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlyInputTextComponent} from './lib/components/fly-input-text/fly-input-text.component';
import {FlyLegendComponent} from './lib/components/fly-legend/fly-legend.component';
import {FlyUppercaseInputDirective} from './lib/directives/fly-uppercase-input.directive';
import {FlyCpfPipe} from './lib/pipes/fly-cpf.pipe';
import {FlyService} from './lib/services/fly.service';
import {FlyUtilService} from './lib/services/fly-util.service';

export * from './lib/components/fly-input-text/fly-input-text.component';
export * from './lib/components/fly-legend/fly-legend.component';
export * from './lib/directives/fly-uppercase-input.directive';
export * from './lib/pipes/fly-cpf.pipe';
export * from './lib/services/fly.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlyInputTextComponent,
        FlyLegendComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe
    ],
    exports: [
        FlyInputTextComponent,
        FlyLegendComponent,
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
