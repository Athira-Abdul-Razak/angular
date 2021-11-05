import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  transform(value: number): number {
    var num1 = Math.round((value * 100) / 100);
    return num1;

  }
}
