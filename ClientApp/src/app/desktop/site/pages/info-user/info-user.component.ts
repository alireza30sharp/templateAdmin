import { Component, OnInit } from '@angular/core';
import * as _stores from "@stores/index";
import { Router } from '@angular/router';
import { UserInfo } from '@stores/index';


@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class infoUserComponent implements OnInit {
  userInfo: UserInfo;
  displayName: string="";
  constructor(
    public readonly userStore: _stores.UserStore,
    private readonly router: Router,
   
  ) { }


  change(value) {
    this.userStore.updateDisplayName(value)
    console.log(value);
  }
  ngOnInit(): void {

  }

  
}
