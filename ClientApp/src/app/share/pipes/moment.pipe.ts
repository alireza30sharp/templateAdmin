import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, time?: string, args?: any): any {

    if(time){
      let MomentDate = moment(value, 'YYYY/MM/DD '+time);
      return MomentDate.locale('fa').format('YYYY/M/D [,]'+time);
    } else {
      if (!value) return value;
      if (value.length < 9) return value;
      if (!moment(value).isValid()) return value;
      return moment.from(value, 'en', 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('YYYY/MM/DD HH:MM')
    }
    
  }
}
