import {Injectable} from '@angular/core';

@Injectable()
export class FlyUtilService {

    constructor() {

    }

    getColClass(value: any, defaultValue: number): string {
        if (!defaultValue) {
            defaultValue = 3;
        }

        if (!value) {
            return 'col-md-' + defaultValue;
        }

        if (value.toString() === '-1') {
            return null;
        }

        return 'col-md-' + value;
    }

    isTrue(value: any): boolean {
        if (!value) {
            return false;
        }

        return value.toString().toLowerCase() === 'true';
    }

    isFalse(value: any): boolean {
        if (!value && value !== false) {
            return false;
        }

        return value.toString().toLowerCase() === 'false';
    }
}
