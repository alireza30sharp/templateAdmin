import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from '@share/share.module';
import { SiteMobileRoutingModule } from '@mobile/site/site-mobile.routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import * as _sitePages from '@mobile/site/pages';
import * as _siteTemplate from '@mobile/site/templates';
import * as _sitePartial from '@mobile/site/partial-pages/index';

@NgModule({
  declarations: [
    _sitePages.HomeMobileComponent,
    _sitePartial.SideMenuMobileComponent,
    _sitePartial.WeekendReserveMobileComponent,
    _siteTemplate.DefaultTemplateMobileComponent,

  ],
  imports: [
    ShareModule,
    CarouselModule,
    SiteMobileRoutingModule,
    CarouselModule,
    NgxPermissionsModule.forChild()
  ],
  providers: [
   
  ],
  bootstrap: [],
  exports: []
})
export class SiteMobileModule { }

