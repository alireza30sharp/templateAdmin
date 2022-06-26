import { Component, OnInit } from '@angular/core';

import { NgxPermissionsService } from 'ngx-permissions';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly permissionsService: NgxPermissionsService,

    private readonly router: Router,
   
  ) { }

  show: any = true;

  ngOnInit(): void {

  }
  login() {
   /* if (this.accountModel.password != "" && this.accountModel.userName != "") {*/
          // Set user information in UserStore and LocalStorage
         /* this.userStorageSvc.saveToken(res.data.token);*/
          //getAccountInfo
       /*   this.getAccountInfo(res.data.token);*/
   
/*    }*/

  }
  private getAccountInfo(token: string): void {

 
        //this.userStore.patchState(<_stores.UserState>{userInfo: response.data});
     ///*   this.userStore.patchState(<_stores.UserState>{ token: token });*/
     //   this.permissionsService.loadPermissions([response.data?.roles as any]);
        this.router.navigate(['/']);
      }
      

  
}
