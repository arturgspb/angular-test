import { Component, Input }  from '@angular/core';

import { AdComponent }       from '../ad.component';

@Component({
  template: `
      <h3>TEXT: {{elem.name}}</h3>
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
