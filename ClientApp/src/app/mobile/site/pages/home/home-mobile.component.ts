import { Component } from '@angular/core';
import * as _sitePages from '@desktop/site/pages';
import { UserService } from '@desktop/admin/services/user.service';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent extends _sitePages.HomeComponent {

  week: number = 1;
  constructor(public override userService: UserService) {
    super(userService);
  }
}

