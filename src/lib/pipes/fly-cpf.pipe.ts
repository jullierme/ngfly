import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'flyCpfPipe'
})
@Injectable()
export class FlyCpfPipe implements PipeTransform {

    transform(value: any, args: any[] = null): string {
        return value;
    }
}