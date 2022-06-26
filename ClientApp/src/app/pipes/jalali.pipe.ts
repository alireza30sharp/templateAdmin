import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "jalali-moment";

@Pipe({
  name: 'unixToMoment'
})
export class UnixToMomentPipe implements PipeTransform {
  transform(date: number, format?: string): any {
   return date;
  }
}

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, format: string ='YYYY/MM/DD HH:MM', args?: any): any {
      if (!value) return value;
      if (value.length < 9) return value;
    if (!moment(value).isValid()) return value;
    value = new Date(value);
    return moment.from(value, 'en', format).locale('fa').format(format);;
    

  }
}
