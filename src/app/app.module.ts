import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { InputComponent }   from './input.component';

import { TextComponent } from './text.component';
import { AdDirective }          from './ad.directive';
import {FormsModule} from "@angular/forms";
import {LegoItemComponent} from "./lego-item.component";
import {LegoComponent} from "./lego.component";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  declarations: [ AppComponent,
                  LegoItemComponent,
                  LegoComponent,
                  InputComponent,
                  TextComponent,
                  AdDirective ],
  entryComponents: [ InputComponent, TextComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

