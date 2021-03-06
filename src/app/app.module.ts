import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core/core.module';
import { SharedModule } from './core/shared/shared.module';
 

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
