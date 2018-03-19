import { Component, Input }  from '@angular/core';

import { AdComponent }       from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{elem.name}}</h4>
      
      <p>{{elem.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `
})
export class TextComponent implements AdComponent {
  @Input() elem: any;
}




/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
