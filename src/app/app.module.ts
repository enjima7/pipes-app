import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//local configuration
import localEsMX from '@angular/common/locales/es-MX'
import localFrCA from '@angular/common/locales/fr-CA'

import { registerLocaleData } from "@angular/common";

registerLocaleData(localEsMX);
registerLocaleData(localFrCA);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue:'es-MX'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
