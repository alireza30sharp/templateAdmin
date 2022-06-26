import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-percent-calc',
  templateUrl: './percent.html',
  styleUrls: ['./percent.scss']
})
export class percentCalc  {
  private params: any;
  percent: number = 0;

  agInit(params: any): void {
    this.params = params;
    
    if (this.params && this.params.value) {
      this.percent = parseFloat((+this.params.value).toFixed(2));
    }
  }
}

