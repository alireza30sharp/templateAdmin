import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'faCurrency'
})
export class FaCurrency implements PipeTransform {
  transform(data: any): string {
    if (data && data != undefined) {
      return data.toLocaleString();
    }
    return null;
  }
}
