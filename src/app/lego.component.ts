import {Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy} from '@angular/core';

import {AdDirective} from './ad.directive';
import {ElemItem} from './lego-item';
import {AdComponent} from './ad.component';

@Component({
  selector: 'me-lego',
  template: `
    <me-lego-item [elem]="elem" *ngFor="let elem of elems"></me-lego-item>
  `
})
export class LegoComponent {
  @Input() elems: ElemItem[];
}

