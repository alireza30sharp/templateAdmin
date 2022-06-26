import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as _siteTpl from '@mobile/site/templates';
import * as _sitePages from '@mobile/site/pages';

export const routes: Routes = [
  {
    path: '', component: _siteTpl.DefaultTemplateMobileComponent,
    children: [
      { path: '',  component: _sitePages.HomeMobileComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteMobileRoutingModule { }
