import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector, ComponentRef } from '@angular/core';

import * as _shareComponents from '@share/components';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }


}
