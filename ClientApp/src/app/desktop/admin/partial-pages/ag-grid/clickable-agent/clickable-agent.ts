import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-clickable-agent',
  templateUrl: './clickable-agent.html',
  styleUrls: ['./clickable-agent.scss']
})
export class ClickableAgent  {

  params: any;
  icon: string;
  text: string;
  class: string;

  agInit(params: any): void {
    this.params = params;
    this.icon = this.params.icon;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      const params = {
        event: $event,
        node: this.params.node.data,
      }
      this.params.onClick(params);
    }

  }
}

