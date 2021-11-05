import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: unknown, limit: number): unknown {
    if (value > limit) {
      return 6;
    }
    return 5;
  }

}
