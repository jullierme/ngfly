import {AfterViewInit, Component, ElementRef, Input, ViewChild, ViewEncapsulation} from '@angular/core';

import {FlyUtilService} from '../../services/fly-util.service';
import {FlyBaseInput} from './../base/fly-base-input';
import {FlyMakeProviderNgModel} from './../base/fly-abstract-ng-model';

let nextUniqueId = 0;

@Component({
    selector: 'fly-input-text',
    templateUrl: './fly-input-text.component.html',
    styleUrls: ['./fly-input-text.component.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [FlyMakeProviderNgModel(FlyInputTextComponent)]
})

export class FlyInputTextComponent extends FlyBaseInput implements AfterViewInit{
    @Input() label: string;
    @Input() hideLabel: boolean;
    @Input() id: string = `fly-input-${nextUniqueId++}`;
    @Input() required: boolean = false;
    @Input() requiredConditional: boolean = false;
    @Input() placeholder: string = '';
    @Input() disabled: boolean = false;
    @Input() readonly: boolean = false;
    @Input() maxlength: number = 1000;
    @Input() minlength: number;
    @Input() pattern: string;


    @Input() precision;
    @Input() scale;
    @Input() type: string;
    @Input() maskValue: string;
    @Input() keepMask: boolean;
    @Input() allowNegativeValue: boolean;
    @Input() selectOnTab: boolean;

    @ViewChild('inputHtml') inputHtml: ElementRef;

    constructor(private flyUtilService: FlyUtilService) {
        super(flyUtilService);
    }

    ngOnInit() { //override ngOnInit
        super.ngOnInit();
    }

    ngAfterViewInit(){
        this.configMask();
    }

    configMask() {
        let _input = document.getElementById(this.id);//this.inputHtml.nativeElement;

        if (this.maskValue) {
            _input.inputmask({
                'mask': this.maskValue,
                'onincomplete': function () {
                   /* if (ngModelCtrl && angular.isFunction(ngModelCtrl.$setViewValue)) {
                        ngModelCtrl.$setViewValue(null);
                    }

                    $setModelValue(this.$parent, null);
                    ngFormCtrl[this.inputName].$setUntouched();*/
                },
                'oncomplete': function () {
                    //validarCpfOuCnpf();
                },
                'clearIncomplete': true,
                'autoUnmask': this.keepMask !== true,
                'greedy': false,
                'allowMinus': this.allowNegativeValue === true,
                'positionCaretOnTab': this.selectOnTab === false
            });
        }
        else if (this.type === 'short') {
            this.type = 'numeric';

            _input.inputmask('integer', {
                rightAlign: false,
                allowMinus: this.allowNegativeValue === true,
                positionCaretOnTab: this.selectOnTab === false
            });

            if (parseInt(this.maxlength+'', 10) > 4) {
                this.maxlength = 4;
            }
        }
        else if (this.type === 'integer') {
            this.type = 'numeric';

            _input.inputmask('integer', {
                rightAlign: false,
                allowMinus: this.allowNegativeValue === true,
                positionCaretOnTab: this.selectOnTab === false
            });

            if (parseInt(this.maxlength+'', 10) > 9) {
                this.maxlength = 9;
            }
        }
        else if (this.type === 'long') {
            this.type = 'numeric';

            _input.inputmask('integer', {
                rightAlign: false,
                allowMinus: this.allowNegativeValue === true,
                positionCaretOnTab: this.selectOnTab === false
            });

            if (parseInt(this.maxlength+'', 10) > 18) {
                this.maxlength = 18;
            }
        }
        else if (this.type === 'ip') {
            _input.inputmask('ip', {
                positionCaretOnTab: this.selectOnTab === false
            });
        }
        else if (this.type === 'decimal') {
            this.type = 'numeric';

            this.maxlength = null;
            this.minlength = null;

            _input.inputmask('decimal', {
                radixPoint: ',',
                autoGroup: true,
                groupSeparator: '.',
                groupSize: 3,
                positionCaretOnTab: this.selectOnTab === false,
                digits: parseInt(this.precision, 10),
                autoUnmask: true,
                unmaskAsNumber:true,
                repeat: parseInt(this.scale, 10) - parseInt(this.precision, 10),
                allowMinus: this.allowNegativeValue === true,
                nojumps: true,
                onBeforeMask: function (maskedValue) {
                    if (maskedValue) {
                        return maskedValue.toString().replaceAll('.', ',');
                    }

                    return maskedValue;
                },
                onUnMask: function (maskedValue, unmaskedValue) {
                    if (maskedValue) {
                        return maskedValue.replaceAll('.', '').replace(',', '.');
                    }
                    else {
                        return unmaskedValue;
                    }
                }
            });
        } else if(this.pattern){
            _input.inputmask('Regex', {
                regex: this.pattern,
                positionCaretOnTab: this.selectOnTab === false,
                isComplete: function(buffer, opts) {
                    return new RegExp(opts.regex).test(buffer.join(''));
                }
            });
        }
    }
}
