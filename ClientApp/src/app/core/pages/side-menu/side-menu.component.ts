import { Component, OnInit, Output, EventEmitter,OnDestroy  } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import * as _stores from "@stores/index";

import * as _srv from "@services/index";
//import { ModalChnagePasswordComponent, ModalMethodOfLetterComponent } from '../../partials';
 
@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit, OnDestroy {
  showMenu: boolean = false;
 /* public roleType = _mls.RoleType;*/
  @Output() hideMenuEvent = new EventEmitter<boolean>();
  balance: number = 0;
  userName;
  constructor(
    private modalService: NgbModal,
    public readonly userStore: _stores.UserStore,
 
  ) { }

  ngOnInit() {
    this.userStore.state$.subscribe((value: _stores.UserState) => {
      debugger
      if (value.balanceNumber) {
        this.balance = value.balanceNumber as any;
      }
      else {
        this.balance=0
      }
      if (value.userInfo) {
        this.userName = value.userInfo.displayName;
      }
      else {
        this.userName = "";
      }

    })
  }

  signOut() {
    //this._account.signup().subscribe(res => {
    //  debugger
    //  if (res.statusCode==200) {
    //this._authService.logout();

    //  }

    //})
  }
  changeAutomaticReserve() {
  
  }
  hideMenu() {
    this.showMenu = !this.showMenu;
    this.hideMenuEvent.emit(this.showMenu);
  }
  openModalWithComponent() {
  //   this.modalService.open(ModalMethodOfLetterComponent, { size: 'lg', centered: true });
  }
  showChangeModal() {
    //this.modalService.open(ModalChnagePasswordComponent, { size: '', centered: true });

  }
  ngOnDestroy() {
 

  }
}
