import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'activeBlocked'})
export class ActiveBlockedPipe implements PipeTransform {
    transform(value:any) {
        return value ? 'Active' : 'Inactive';
    }
}