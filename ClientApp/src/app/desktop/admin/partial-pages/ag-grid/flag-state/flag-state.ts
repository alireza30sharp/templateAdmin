import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-flag-state',
  templateUrl: './flag-state.html',
  styleUrls: ['./flag-state.scss']
})
export class FlagState  {
  private params: any;
  flag: string = null;

  agInit(params: any): void {
    this.params = params;
    
    if (this.params && this.params.value) {
      this.flag = "✔";
    }
  }
}

