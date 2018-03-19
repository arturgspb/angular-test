import {Component, OnInit} from '@angular/core';

import {ElemItem} from "./lego-item";
import {InputComponent} from "./input.component";
import {TextComponent} from "./text.component";

@Component({
  selector: 'app-root',
  template: `
    <me-lego [elems]="elems"></me-lego>
  `
})
export class AppComponent implements OnInit {
  elems: ElemItem[];

  ngOnInit() {
    this.elems = [
      new ElemItem(TextComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new ElemItem(TextComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new ElemItem(InputComponent, {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!'
      }),

      new ElemItem(InputComponent, {
        headline: 'Openings in all departments',
        body: 'Apply today'
      }),
    ];
  }
}

