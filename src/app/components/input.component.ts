import { Component, Input } from '@angular/core';

import { AdComponent }      from '../ad.component';

@Component({
  template: `
      <h4>Input: {{elem.headline}}</h4> 
      <input [(ngModel)]="elem.headline" >
  `
})
export class InputComponent implements AdComponent {
  @Input() elem: any;
}

