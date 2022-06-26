import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@desktop/admin/partial-pages/aggrid-master";

import { ColDef, Column, ColumnApi, GetContextMenuItemsParams, GridOptions, GridReadyEvent, MenuItemDef, RowNodeTransaction } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@desktop/admin/services/user.service';
import { getData, globalRowData } from './data';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent extends AgGridMaster  {

  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }
  public defaultColDef: ColDef = {
    width: 120,
    sortable: true,
    resizable: true,
  };
  public autoGroupColumnDef: ColDef = {
    width: 250,
  };
  public columnDefs: ColDef[] = [
    // these are the row groups, so they are all hidden (they are show in the group column)
    {
      headerName: 'Product',
      field: 'product',
      enableRowGroup: true,
      enablePivot: true,
      rowGroupIndex: 0,
      hide: true,
    },
    {
      headerName: 'Portfolio',
      field: 'portfolio',
      enableRowGroup: true,
      enablePivot: true,
      rowGroupIndex: 1,
      hide: true,
    },
    {
      headerName: 'Book',
      field: 'book',
      enableRowGroup: true,
      enablePivot: true,
      rowGroupIndex: 2,
      hide: true,
    },
    { headerName: 'Trade', field: 'trade', width: 100 },
    // all the other columns (visible and not grouped)
    {
      field: 'current',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
  /*    valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      field: 'previous',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
     /* valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      field: 'dealType',
      enableRowGroup: true,
      enablePivot: true,
    },
    {
      headerName: 'Bid',
      field: 'bidFlag',
      enableRowGroup: true,
      enablePivot: true,
      width: 100,
    },
    {
      headerName: 'PL 1',
      field: 'pl1',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
/*      valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      headerName: 'PL 2',
      field: 'pl2',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
/*      valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      headerName: 'Gain-DX',
      field: 'gainDx',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
   /*   valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      headerName: 'SX / PX',
      field: 'sxPx',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
      /*valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      headerName: '99 Out',
      field: '_99Out',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
    /*  valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      field: 'submitterID',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
/*      valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      field: 'submitterDealID',
      width: 200,
      aggFunc: 'sum',
      enableValue: true,
      cellClass: 'number',
    /*  valueFormatter: numberCellFormatter,*/
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
  ];
  public rowData: any[] ;
  public rowSelection = 'multiple';
  public rowGroupPanelShow = 'always';
  public pivotPanelShow = 'always';





  ngOnInit(): void {
 
    this.get();

  }
  get() {
    debugger
    this.rowData = getData();
  }



}

