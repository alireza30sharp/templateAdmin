import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ICellEditorAngularComp } from 'ag-grid-angular';


@Component({
  selector: 'app-ag-grid-cell-editable',
  templateUrl: './cell-editable.html',
  styleUrls: ['./cell-editable.scss']
})
export class CellEditable implements ICellEditorAngularComp  {
  public params: any;
  public value: any;

  agInit(params: any): void {
    this.params = params;
    this.value = this.params.value;
  }

  getValue(): any {
    return this.value;
  }

  isCancelAfterEnd(): boolean {
    return false;
  }

  change($event) {
    if (this.params.onChange instanceof Function) {
      const params = {
        value: $event.currentTarget.value,
        node: this.params.node.data
      }
      this.params.onChange(params);
    }
  }

}

