import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import * as  corePage from '@core/pages';

import * as _shareSvc from '@share/services';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./desktop/site/site.module').then(mod => mod.SiteModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./desktop/admin/admin.module').then(mod=>mod.AdminModule)
  },
  
  {
    path: 'login',
    component: corePage.LoginComponent
  }
];

export const mobileRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mobile/site/site-mobile.module').then(mod => mod.SiteMobileModule)
  },
  //{
  //  path: 'admin',
  //  loadChildren: () => import('./desktop/admin/admin.module').then(mod => mod.AdminModule)
  //},
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
