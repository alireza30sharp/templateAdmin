import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { AppRoutingModule, mobileRoutes} from './app-routing.module';
import { Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';

import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent,

  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    IconModule,
    NgxPermissionsModule.forRoot(),
  ],
  providers: [IconSetService, Title, NgxPermissionsService,],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    
    if ((window as any).isMobile) {
      this.router.resetConfig(mobileRoutes);
    }


  }

}
