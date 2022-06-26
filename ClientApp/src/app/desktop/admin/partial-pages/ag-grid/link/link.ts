import { Component } from '@angular/core';

@Component({
  selector: 'app-ag-grid-link',
  templateUrl: './link.html',
  styleUrls: ['./link.scss']
})
export class AgLink  {
  private params: any;
  link: string;
  title: string;

  agInit(params: any): void {
    this.params = params;
    
    if (this.params && this.params.value) {
      this.link = this.params.value;
      this.title = this.params.value ? this.params.value : "لینک";
    }
  }

  onClick() {
    window.open(this.link, '_blank');
  }


}

