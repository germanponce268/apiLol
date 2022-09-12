import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiLolModule } from './api-lol/api-lol-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiLolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
