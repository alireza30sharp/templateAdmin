import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import * as _adminPages from '@desktop/admin/pages';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: _adminPages.AllUserListComponent },
      { path: 'columnMoving', component: _adminPages.ColumnMovingComponent },
      { path: 'transaction', component: _adminPages.TransactionComponent },
      { path: 'group', component: _adminPages.GroupComponent },
      { path: 'rendering', component: _adminPages.RenderingComponent },

    ]
  },

  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
