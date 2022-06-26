import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'faCurrency'
})
export class FaCurrencyPipe implements PipeTransform {

  transform(value: number | null | undefined, isPrefix?: boolean): any {
    var convertedValue = ((value || 0) / 10);
    return isPrefix ? convertedValue + ' تومان ' : convertedValue;
  }

}
