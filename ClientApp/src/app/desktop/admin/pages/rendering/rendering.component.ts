import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@desktop/admin/partial-pages/aggrid-master";

import { CellPosition, CellValueChangedEvent, ColDef, Column, ColumnApi, GetContextMenuItemsParams, GridOptions, GridReadyEvent, MenuItemDef, NavigateToNextCellParams, RowNodeTransaction, RowValueChangedEvent, ValueParserParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@desktop/admin/services/user.service';
import { getData, globalRowData } from './data';
@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.scss']
})
export class RenderingComponent extends AgGridMaster  {
  editable= false;
  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }
  public columnDefs: ColDef[] = [
    {
      headerName: 'Editable A',
      field: 'a',
      editable: true,
      valueParser: params => {
        debugger;
        if (params.newValue == "+") {
          this.gridApi.stopEditing();
          this.gridApi.getCurrentUndoSize();
          return 0;
        }
        else {

          return Number(params.newValue);
        }


      }
  
    },
    {
      headerName: 'Editable B',
      field: 'b',
      editable: true,
      valueParser: this.numberValueParser,
    },
    {
      headerName: 'Editable C',
      field: 'c',
      editable: true,
      valueParser: this.numberValueParser,
    },
    //{
    //  headerName: 'API D',
    //  field: 'd',
    //  minWidth: 140,
    //  valueParser: numberValueParser,
    //  cellRenderer: 'agAnimateShowChangeCellRenderer',
    //},
    //{
    //  headerName: 'API E',
    //  field: 'e',
    //  minWidth: 140,
    //  valueParser: numberValueParser,
    //  cellRenderer: 'agAnimateShowChangeCellRenderer',
    //},
    {
      headerName: 'Total',
      minWidth: 140,
      valueGetter: 'data.a + data.b + data.c  ',
      cellRenderer: 'agAnimateShowChangeCellRenderer',
    },
    {
      headerName: 'Average',
      minWidth: 140,
      valueGetter: '(data.a + data.b + data.c) / 3',
      cellRenderer: 'agAnimateSlideCellRenderer',
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 120,
    resizable: true,
    cellClass: 'align-right',
    valueFormatter: (params) => {
      return this.formatNumber(params.value);
    },
  };
  public rowData: any[] ;
  undoRedoCellEditing = true;
  undoRedoCellEditingLimit = 1;
  undoCellEditing() {
    this.gridApi.getCurrentUndoSize();
  }
  onUpdateSomeValues() {
    const rowCount = this.gridApi.getDisplayedRowCount();
    for (let i = 0; i < 10; i++) {
      const row = Math.floor(Math.random() * rowCount);
      const rowNode = this.gridApi.getDisplayedRowAtIndex(row)!;
      rowNode.setDataValue('d', Math.floor(Math.random() * 10000));
      rowNode.setDataValue('e', Math.floor(Math.random() * 10000));
    }
  }
  numberValueParser(params: ValueParserParams) {
    if (params.newValue == "+") {

      return 0;
    }
    else {
 
    return Number(params.newValue);
    }
  }

  onCellValueChanged(event: CellValueChangedEvent) {
  
    console.log('data after changes is: ', event.data);
  }

  onRowValueChanged(event: RowValueChangedEvent) {
    var data = event.data;
    console.log(
      'onRowValueChanged: (' +
      data.a +
      ', ' +
      data.b +
      ', ' +
      data.c +
      ', ' +
      data.d +-
      ')'
    );
  }

  AddRow() {
    debugger
    this.gridApi.applyTransaction({ add: [{ a: 0, b: 0, c: 0 }] });
    let index = this.rowData.length
    this.gridApi.startEditingCell({
      rowIndex: index,
      colKey: 'a',
    });
  }

  onBtStartEditing() {
    let index = this.rowData.length
    this.gridApi.setFocusedCell(index, 'a');
  
    this.gridApi.startEditingCell({
      rowIndex: index,
      colKey: 'a',
    });
  }
  formatNumber(number: number) {
    // this puts commas into the number eg 1000 goes to 1,000,
    // i pulled this from stack overflow, i have no idea how it works
    return Math.floor(number)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  createRowData() {
    const rowData = [];
    for (let i = 0; i < 3; i++) {
      rowData.push({
        a: Math.floor(((i + 323) * 25435) % 10000),
        b: Math.floor(((i + 323) * 23221) % 10000),
        c: Math.floor(((i + 323) * 468276) % 10000),
        d: 0,
        e: 0,
      });
    }
    return rowData;
  }


  override editCell() {

  }

  onKeydown(event) {
    
    if (event.key === "Enter") {
      console.log(event);
    }
    if (event.key == "+") {
      //this.gridApi.applyTransaction({ add: [{ a: 0, b: 0, c: 0 }] });
      let index = this.rowData.length;
      this.rowData.splice(index++, 0, { a: 0, b: 0, c: 0 });
      this.gridApi.setRowData(this.rowData);
      this.gridApi.startEditingCell({
        rowIndex: index,
        colKey: 'a',
      });
      this.gridApi.setFocusedCell(index, 'a');
    }
    if (event.key == "-") {
      const selectedRow = this.gridApi.getSelectedRows();
      this.gridApi.applyTransaction({ remove: selectedRow });
    }
  }


  ngOnInit(): void {
 
    this.get();

  }
  get() {
    
    this.rowData = this.createRowData();
  }


  navigateToNextCell(params: NavigateToNextCellParams): CellPosition | null {
    
    var suggestedNextCell = params.nextCellPosition;
    var KEY_UP = 38;
    var KEY_DOWN = 40;
    var noUpOrDownKeyPressed = params.key !== KEY_DOWN && params.key !== KEY_UP as any;
    if (noUpOrDownKeyPressed || !suggestedNextCell) {
      return suggestedNextCell;
    }
    params.api.forEachNode(function (node) {
      if (node.rowIndex === suggestedNextCell!.rowIndex) {
        node.setSelected(true);
      }
    });
    return suggestedNextCell;
  }
}

