import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlyInputTextComponent} from './lib/components/fly-input-text/fly-input-text.component';
import {FlyUppercaseInputDirective} from './lib/directives/fly-uppercase-input.directive';
import {FlyCpfPipe} from './lib/pipes/fly-cpf.pipe';
import {FlyService} from './lib/services/fly.service';

/*Components*/
export * from './lib/components/fly-input-text/fly-input-text.component';

/*Directives*/
export * from './lib/directives/fly-uppercase-input.directive';

/*Pipes*/
export * from './lib/pipes/fly-cpf.pipe';

/*Services*/
export * from './lib/services/fly.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        FlyInputTextComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe
    ],
    exports: [
        FlyInputTextComponent,
        FlyUppercaseInputDirective,
        FlyCpfPipe
    ]
})
export class NgFlyModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgFlyModule,
            providers: [FlyService]
        };
    }
}