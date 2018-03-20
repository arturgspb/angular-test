import {Component, OnInit} from '@angular/core';

import {ElemItem} from "./lego-item";
import {InputComponent} from "./components/input.component";
import {TextComponent} from "./components/text.component";
import {LegoComponent} from "./components/lego.component";

@Component({
  selector: 'app-root',
  template: `
    <me-lego [elem]="elem"></me-lego>
  `
})
export class AppComponent implements OnInit {
  elem: ElemItem;

  ngOnInit() {
    this.elem = new ElemItem(null, {
      elems: [
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

        new ElemItem(LegoComponent, {
          elems: [
            new ElemItem(TextComponent, {name: 'XXXXX', bio: 'Brave as they come'}),

            new ElemItem(TextComponent, {name: 'YYYYY', bio: 'Smart as they come'}),

          ]
        })
      ]
    });
  }
}

