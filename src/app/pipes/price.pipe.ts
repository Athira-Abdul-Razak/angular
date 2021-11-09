import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'price'
})

export class PricePipe implements PipeTransform {
  transform(value: any): any {
    if (value % 0.5 === 0) {
      var num = Math.floor((value * 100) / 100);
      return num;
    }
    else {
      var num = Math.round((value * 100) / 100);
      return num;
    }
  }
}
