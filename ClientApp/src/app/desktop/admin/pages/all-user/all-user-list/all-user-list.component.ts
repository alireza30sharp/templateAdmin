import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { AgGridMaster } from "@desktop/admin/partial-pages/aggrid-master";

import { ColDef, GetContextMenuItemsParams, GridOptions, GridReadyEvent, MenuItemDef } from 'ag-grid-community';
import { Router } from '@angular/router';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserService } from '@desktop/admin/services/user.service';

@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent extends AgGridMaster  {

  constructor(
    private readonly userService: UserService,
    private router: Router,
    modalService: BsModalService
  ) {
    super(modalService);
  }

  public columnDefs: ColDef[] = [
    { field: 'athlete', minWidth: 200 },
    { field: 'age' },
    { field: 'country', minWidth: 200 },
    { field: 'year' },
    { field: 'date', minWidth: 180 },
    { field: 'sport', minWidth: 200 },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ];
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
  };
  public rowData!: any[];


  //rowData = [];
  //rowDataDefault = [];

  //columnsDefault: ColDef[] = [
  //  {
  //    field: "userId",
  //    headerName: "userId",
 // hide: true
  // sortable: true,
  //resizable: true,
 // cellRendererFramework: agc.FlagState,
  //    sortable: true,
  //    filter: 'agTextColumnFilter',
  //  }, {
  //    field: "id",
  //    headerName: "id",
  //    sortable: true,
  //    filter: 'agTextColumnFilter',
  //  }, {
  //    field: "title",
  //    headerName: "title",
  //    sortable: true,
  //    filter: 'agTextColumnFilter',
  //  }, {
  //    field: "body",
  //    headerName: "body",
  //    sortable: true,
  //    filter: 'agTextColumnFilter',
  //  }
  //];


  //columns: ColDef[] = [
  //  { field: 'name' },
  //  { field: 'id' },
  //];

  dataTree = [
    { name: "a", id: 1, parent: null },
    { name: "b", id: 2, parent: 1 },
    { name: "c", id: 3, parent: null },
    { name: "d", id: 4, parent: null },
    { name: "e", id: 5, parent: 2 },
    { name: "f", id: 6, parent: 1 },
  ]


  ngOnInit(): void {
    this.getList();
    this.get();
/*    this.ToTree(this.dataTree);*/
  }

  getList() {
    this.userService.getList().subscribe((res) => {
    //  this.rowDataDefault = res;
    })
  }
  get() {
    this.userService.get().subscribe((res) => {
      this.rowData = res;
    })
  }
  //override removeCell(row) {
  //  this.loading = true;
  //  //this.shopService.remove(row.id).subscribe((list: any) => {
  //  //  if (list.statusCode == 200) {
  //  //    this.getShopList();
  //  //  }
  //  //});
  //}


  //override editCell(row) {
  // // this.router.navigate([`/admin/shop/form/${row.id}`])
  //}

}

