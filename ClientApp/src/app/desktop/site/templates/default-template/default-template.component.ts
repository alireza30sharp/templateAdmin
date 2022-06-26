import { Component } from '@angular/core';
import * as _stores from '@share/stores';

@Component({
  selector: 'app-default-template',
  templateUrl: './default-template.component.html',
  styleUrls: ['./default-template.component.scss']
})
export class DefaultTemplateComponent {
  constructor(public readonly userStore: _stores.UserStore,) {

  }
  showMenu: boolean = true;
  hideMenuEvent(val: any) {
    this.showMenu = !val;
  }


  set() {
    this.userStore.patchState(<_stores.UserState>{ balanceNumber: 1  })
  }

  clear() {
    
    this.userStore.clearStore()
  }
}
