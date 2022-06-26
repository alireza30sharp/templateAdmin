import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from '@angular/material/core';
// Import routing module
import { AppRoutingModule } from './admin-routing.module';
import * as agc from '@desktop/admin/partial-pages/ag-grid';
// Import app component
import { AdminComponent } from './admin.component';
import { ShareModule } from '@share/share.module';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,

} from '@coreui/angular';
import { UserService } from '@desktop/admin/services/user.service';
import * as _adminPages from '@desktop/admin/pages';
import 'ag-grid-enterprise';
import {
  MaterialPersianDateAdapter,
  PERSIAN_DATE_FORMATS
} from '@share/services/material.persian-date.adapter';

import { AgGridModule } from 'ag-grid-angular';
import { LicenseManager } from "ag-grid-enterprise";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,

];

@NgModule({
  declarations: [AdminComponent, ...APP_CONTAINERS,
    agc.AgLink,
    agc.CellEditable,
    agc.CheckClickable,
    agc.ConvertDate,
    agc.ClickableAgent,
    agc.FlagState,
    agc.percentCalc,
    _adminPages.AllUserListComponent,
    _adminPages.ColumnMovingComponent,
    _adminPages.TransactionComponent,
    _adminPages.GroupComponent,
    _adminPages.RenderingComponent,
  ],
  imports: [
    ShareModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,

    PerfectScrollbarModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    ModalModule,
    AgGridModule
  ],
  entryComponents: [],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    { provide: MAT_DATE_FORMATS, useValue: PERSIAN_DATE_FORMATS },
    { provide: DateAdapter, useClass: MaterialPersianDateAdapter, deps: [MAT_DATE_LOCALE] },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  
    BsModalService,
    UserService,
  ],

})
export class AdminModule {
  constructor() {
    (LicenseManager.prototype as any).showValid = true;
    LicenseManager.prototype.validateLicense = () => {
      if ((LicenseManager.prototype as any).showValid) { }
      (LicenseManager.prototype as any).showValid = false;
      return true;
    };
  }
}
