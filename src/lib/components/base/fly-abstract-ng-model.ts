import {forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export abstract class FlyAbstractNgModel implements ControlValueAccessor {
    //@Input() value: string = '';
    _value: any = '';

    get value(): any {
        return this._value;
    };

    set value(v: any) {
        //if (v !== this._value) {
            this._value = v;
            this._onChange(v);
       // }
    }

    writeValue(value: any) {
        this.value = value;
        // warning: comment below if only want to emit on user intervention
        //this.onChange(value);
    }

    // call if value was changed inside our component
    public _onChange = (_: any) => {
    };
    // call if input was "touched" .. !
    private _onTouched = () => {
    };

    public registerOnChange(fn: (_: any) => void): void {
        this._onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this._onTouched = fn;
    }
}

export function FlyMakeProviderNgModel(type: any) {
    return {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => type),
        multi: true
    };
}