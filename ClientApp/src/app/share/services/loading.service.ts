import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { Loading } from './../components/loading/loading.component';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: Boolean;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }


  CreateLoading(toggle) {
    if (toggle == false) {
      if (document.querySelector('loading'))
        document.querySelector('loading').remove();
    } else {
      const componentRef = this.componentFactoryResolver
        .resolveComponentFactory(Loading)
        .create(this.injector);
      // 2. Attach component to the appRef so that it's inside the ng component tree
      this.appRef.attachView(componentRef.hostView);

      // 3. Get DOM element from component
      const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

      // 4. Append DOM element to the body
      document.body.appendChild(domElem);
    }
  }

  showLoading() {
    this.CreateLoading(true);
  }
  hideLoading() {
    this.CreateLoading(false);

  }

}
