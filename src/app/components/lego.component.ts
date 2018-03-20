import {Component, Input} from '@angular/core';

import {ElemItem} from '../lego-item';

@Component({
  selector: 'me-lego',
  template: `
    {{elem|json}}
    <div *ngFor="let e of elem.elem.elems" style="margin: 10px; border: 1px solid red">
      {{e|json}}
        <me-lego-item [elem]="e"></me-lego-item>
    </div>
  `
})
export class LegoComponent {
  @Input() elem: ElemItem;
}

