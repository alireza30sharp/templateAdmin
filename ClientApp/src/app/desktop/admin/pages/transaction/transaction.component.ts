import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@desktop/admin/partial-pages/aggrid-master";

import { ColDef, Column, ColumnApi, GetContextMenuItemsParams, GridOptions, GridReadyEvent, MenuItemDef, RowNodeTransaction } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@desktop/admin/services/user.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent extends AgGridMaster  {

  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }


  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'zombies' },
    { field: 'style' },
    { field: 'clothes' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
  };
  public rowData: any[] ;
  public rowSelection = 'multiple';

  getRowData() {
    const rowData: any[] = [];
    this.gridApi.forEachNode(function (node) {
      rowData.push(node.data);
    });
    console.log('Row Data:');
    console.table(rowData);
  }

  clearData() {
    this.gridApi.setRowData([]);
  }

  addItems(addIndex: number | undefined) {
    const newItems = [
      this.createNewRowData(),
      this.createNewRowData(),
      this.createNewRowData(),
    ];
    const res = this.gridApi.applyTransaction({
      add: newItems,
      addIndex: addIndex,
    })!;
    this.printResult(res);
  }

  updateItems() {
    // update the first 2 items
    const itemsToUpdate: any[] = [];
    this.gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
      // only do first 2
      if (index >= 2) {
        return;
      }
      const data = rowNode.data;
      data.price = Math.floor(Math.random() * 20000 + 20000);
      itemsToUpdate.push(data);
    });
    const res = this.gridApi.applyTransaction({ update: itemsToUpdate })!;
this.printResult(res);
  }

  onRemoveSelected() {
    const selectedData = this.gridApi.getSelectedRows();
    const res = this.gridApi.applyTransaction({ remove: selectedData })!;
    this.printResult(res);
  }

 


 
 

  

  
  

  




  ngOnInit(): void {
 
    this.get();

  }
  get() {
    this.userService.get().subscribe((res) => {
      this.rowData = res;
    })
  }
 
   printResult(res: RowNodeTransaction) {
  console.log('---------------------------------------');
  if (res.add) {
    res.add.forEach(function (rowNode) {
      console.log('Added Row Node', rowNode);
    });
  }
  if (res.remove) {
    res.remove.forEach(function (rowNode) {
      console.log('Removed Row Node', rowNode);
    });
  }
  if (res.update) {
    res.update.forEach(function (rowNode) {
      console.log('Updated Row Node', rowNode);
    });
  }
  }

     newCount = 1;
 createNewRowData() {
  const newData = {
    make: 'Toyota ' + this.newCount,
    model: 'Celica ' + this.newCount,
    price: 35000 + this.newCount * 17,
    zombies: 'Headless',
    style: 'Little',
    clothes: 'Airbag',
  };
     this.newCount++;
  return newData;
}
}

