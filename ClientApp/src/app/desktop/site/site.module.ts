import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { ShareModule } from '@share/share.module';
import { SiteRoutingModule } from '@desktop/site/site.routing.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import * as _sitePages from '@desktop/site/pages';
import * as _siteTemplate from '@desktop/site/templates';
import * as _sitePartial from '@desktop/site/partial-pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    _sitePages.HomeComponent,
    _sitePages.infoUserComponent,
    _sitePartial.WeekendReserveComponent,
    _siteTemplate.DefaultTemplateComponent,

  ],
  imports: [
    FormsModule,
    ShareModule,
    CarouselModule,
    SiteRoutingModule,
    CarouselModule,
   
    NgxPermissionsModule.forChild()
  ],
  providers: [
   
  ],
  bootstrap: [],
  exports: []
})
export class SiteModule { }

