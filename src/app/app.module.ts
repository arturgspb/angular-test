import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { AppComponent }         from './app.component';
import { InputComponent }   from './components/input.component';

import { TextComponent } from './components/text.component';
import { AdDirective }          from './ad.directive';
import {FormsModule} from "@angular/forms";
import {LegoItemComponent} from "./lego-item.component";
import {LegoComponent} from "./components/lego.component";

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  providers: [],
  declarations: [ AppComponent,
                  LegoItemComponent,
                  LegoComponent,
                  InputComponent,
                  TextComponent,
                  AdDirective ],
  entryComponents: [ InputComponent, TextComponent, LegoComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

