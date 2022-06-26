import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-check-clickable',
  templateUrl: './check-clickable.html',
  styleUrls: ['./check-clickable.scss']
})
export class CheckClickable  {

  private params: any;
  flag: boolean;
  reverseFlag: boolean = false;
  activeLabel: string;
  deActiveLabel: string;

  agInit(params: any): void {
    this.params = params;
    this.activeLabel = this.params.activeLabel ? this.params.activeLabel : "فعال";
    this.deActiveLabel = this.params.deActiveLabel ? this.params.deActiveLabel : "غیرفعال";
    this.flag = this.params && this.params.value;
    this.reverseFlag = this.params.reverseFlag || false;
  }

  onClick($event) {
    this.flag = !this.flag;
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        node: this.params.node.data,
        flag: this.flag
      }
      this.params.onClick(params);
    }

  }
}

