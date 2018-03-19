import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {AdDirective} from './ad.directive';
import {ElemItem} from './lego-item';
import {AdComponent} from './ad.component';

@Component({
  selector: 'me-lego-item',
  template: `
    <ng-template ad-host></ng-template>
  `
})
export class LegoItemComponent implements OnInit, OnDestroy {
  @Input() elem: ElemItem;
  @ViewChild(AdDirective) adHost: AdDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  ngOnDestroy() {
  }

  loadComponent() {
    let adItem = this.elem;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).elem = adItem.elem;
  }

}
