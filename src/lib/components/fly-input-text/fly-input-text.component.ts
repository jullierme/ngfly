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

export class FlyInputTextComponent extends FlyBaseInput implements AfterViewInit {
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

    ngAfterViewInit() {
       // this.configMask();
    }

    /*configMask() {
        let _input = $(this.inputHtml.nativeElement);

        let onComplete = () => {
            this.ngModelChange.emit(this.inputHtml.nativeElement.value);
        };

        let onIncomplete = () => {
            this.ngModelChange.emit(null);
        };

        if (this.maskValue) {
            _input.inputmask({
                'mask': this.maskValue,
                'onincomplete': function () {
                    onIncomplete();
                },
                'oncomplete': function () {
                    onComplete();
                    //validarCpfOuCnpf();
                },
                'clearIncomplete': true,
                'autoUnmask': this.keepMask !== true,
                'greedy': false,
                'allowMinus': this.allowNegativeValue === true,
                'positionCaretOnTab': this.selectOnTab === false
            });
        }
        else if (this.type === 'short' || this.type === 'integer' || this.type === 'long') {
            let scale = 9;
            let mask = '999999999';

            if (this.type === 'short'){
                mask = '999999999';
                scale = 4;
            } else if (this.type === 'long') {
                mask = '999999999999999999';
                scale = 18;
            }

            _input.inputmask({
                'mask': mask,
                'onincomplete': function () {
                    //onComplete();
                },
                'oncomplete': function () {
                    //onComplete();
                },
                placeholder:'',
                greedy: false,
                rightAlign: false,
                numericInput: true,
                'clearIncomplete': false,
                'allowMinus': this.allowNegativeValue === true,
                'positionCaretOnTab': this.selectOnTab === false
            });

            if (parseInt(this.maxlength + '', 10) > scale) {
                this.maxlength = scale;
            }

        }
        else if (this.type === 'decimal') {
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
                unmaskAsNumber: true,
                repeat: parseInt(this.scale, 10) - parseInt(this.precision, 10),
                allowMinus: this.allowNegativeValue === true,
                nojumps: true,
                numericInput: true,
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
        } else if (this.pattern) {
            _input.inputmask('Regex', {
                regex: this.pattern,
                positionCaretOnTab: this.selectOnTab === false,
                isComplete: function (buffer, opts) {
                    return new RegExp(opts.regex).test(buffer.join(''));
                }
            });
        }
    }
    */
}
