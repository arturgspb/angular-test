import { Component, Input } from '@angular/core';

import { AdComponent }      from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{elem.headline}}</h4> 
      
      {{elem.body}}
      <input [(ngModel)]="elem.headline" >

    </div>
  `
})
export class InputComponent implements AdComponent {
  @Input() elem: any;
}

