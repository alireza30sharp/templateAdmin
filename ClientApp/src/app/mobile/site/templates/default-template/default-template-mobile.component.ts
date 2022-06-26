import { Component } from '@angular/core';
import * as _stores from '@share/stores';
import * as _sitePages from '@desktop/site/templates';
@Component({
  selector: 'app-default-template-mobile',
  templateUrl: './default-template-mobile.component.html',
  styleUrls: ['./default-template-mobile.component.scss']
})
export class DefaultTemplateMobileComponent extends _sitePages.DefaultTemplateComponent {
  override showMenu: boolean = false;
  constructor(public override userStore: _stores.UserStore,) {
    super(userStore);
  }
}
