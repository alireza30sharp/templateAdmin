import { Component } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-ag-grid-convert-date',
  templateUrl: './convert-date.html',
  styleUrls: ['./convert-date.scss']
})
export class ConvertDate {
  private params: any;
  date: string = null;

  agInit(params: any): void {
    this.params = params;
    if (this.params && moment(this.params.value).isValid()) {
      this.date = moment.from(this.params.value, "en", "YYYY-MM-DD HH:mm:ss").locale("fa").format("YYYY-MM-DD HH:mm:ss");
    } else {
      this.date = this.params.value;
    }
  }
}
