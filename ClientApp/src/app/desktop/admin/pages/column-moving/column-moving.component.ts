import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@desktop/admin/partial-pages/aggrid-master";

import { ColDef, Column, ColumnApi, GetContextMenuItemsParams, GridOptions, GridReadyEvent, MenuItemDef } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@desktop/admin/services/user.service';

@Component({
  selector: 'app-column-moving',
  templateUrl: './column-moving.component.html',
  styleUrls: ['./column-moving.component.scss']
})
export class ColumnMovingComponent extends AgGridMaster  {

  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }



  public columnDefs: ColDef[] = [
    { field: 'athlete', sortable: true },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    width: 150,
  };
  public rowData!: any[];


  onMedalsFirst() {
    this.gridColumnApi.moveColumns(['gold', 'silver', 'bronze', 'total'], 0);
  }

  onMedalsLast() {
    this.gridColumnApi.moveColumns(['gold', 'silver', 'bronze', 'total'], 6);
  }

  onCountryFirst() {
    this.gridColumnApi.moveColumn('country', 0);
  }

  onSwapFirstTwo() {
    this.gridColumnApi.moveColumnByIndex(0, 1);
  }

  onPrintColumns() {
    const cols = this.gridColumnApi.getAllGridColumns();
    const colToNameFunc = (col: Column, index: number) =>
      index + ' = ' + col.getId();
    const colNames = cols.map(colToNameFunc).join(', ');
    console.log('columns are: ' + colNames);
  }

  




  ngOnInit(): void {
 
    this.get();

  }
  get() {
    this.userService.get().subscribe((res) => {
      this.rowData = res;
    })
  }
 


}

