import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from "./material.module";
import { InterceptorService } from '@core/services/interceptors.service';
import * as _shareSvc from '@share/services';
import * as _shareCmp from '@share/components';
import * as _shareDir from '@share/directives';
import * as  corePage from '@core/pages';

import * as _sharePipe from '@share/pipes';
import * as _stores from '@share/stores';
import { ShareRoutingModule } from './share.routing.module';

@NgModule({
  declarations: [
    corePage.SideMenuComponent,
    _shareCmp.Loading,
    _shareCmp.CommingSoonComponent,
    _shareCmp.FooterComponent,
    _shareCmp.HeaderComponent,
    _shareCmp.Loading,
    _shareDir.CommingSoonDirective,
    _shareDir.StopPropagationDirective,
    _sharePipe.JalaliPipe,
    _sharePipe.FaCurrency,
    _sharePipe.SafeUrlPipe
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    ShareRoutingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    _sharePipe.JalaliPipe,
    _sharePipe.FaCurrency,
    _sharePipe.SafeUrlPipe,

    _shareCmp.Loading,
    _shareCmp.FooterComponent,
    _shareCmp.HeaderComponent,
    _shareCmp.Loading,
    _shareCmp.CommingSoonComponent,

    _shareDir.CommingSoonDirective,
    _shareDir.StopPropagationDirective,
    corePage.SideMenuComponent,
  ],
  providers: [
    CurrencyPipe,
    DecimalPipe,
    _stores.UserStore,
    _shareSvc.NotificationService,
    _shareSvc.LoadingService,
    _shareSvc.UserStorageService,
  ],
  bootstrap: []
})
export class ShareModule {
  static forRoot() {
    return {
      ngModule: ShareModule,

    }
  }  
}
