import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

//import * as _shareMls from '@share/models';
import * as _shareSvc from '@share/services';

@Injectable()
export class UserStore extends ComponentStore<UserState> {

  constructor(private readonly userStorageSvc: _shareSvc.UserStorageService) {
    super({
      token: undefined,
      userInfo: undefined,
      balanceNumber: undefined,
    });
  }
  token: Observable<string> = this.select((state) => state.token);
  userInfo: Observable<UserInfo> = this.select(state => state.userInfo) as any;
  balanceNumber: Observable<number> = this.select((state) => state.balanceNumber) as any;


/*  * Update only display name */
  readonly updateDisplayName = this.updater((state, name: string) => {
    if (!state.userInfo) {
      state.userInfo = {
        automaticReserve: false,
        avatar: null,
        displayName: null,
        lastLoginDate: null,
        organization: null,
        position: null,
        username: null,
      }
    }
    state.userInfo.displayName = name;

    let newstate = {
      token: state.token,
      userInfo: state.userInfo,
      balanceNumber: state.balanceNumber,
    }
    return newstate;
  });






  readonly clearStore = this.updater((state) => {

    state = {
      token: undefined,
      userInfo: undefined,
      balanceNumber: undefined,
    }
    return state;
  });
}
export class UserState {

  token?: any;
  userInfo?:UserInfo;
  //موجودی کاربر
  balanceNumber?: number
}



export interface UserInfo {
  automaticReserve?: boolean;
  avatar?: any;
  displayName?: string;
  lastLoginDate?: any;
  organization?: any;
  position?: any;
  username?: any;
/*  roles?: RoleType;*/
}
