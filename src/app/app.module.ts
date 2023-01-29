import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import { OurWorkModalDetails } from './components/our-works/our-work-modal-details/our-work-modal-details';
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCarouselModule} from "ng-zorro-antd/carousel";

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        OurWorkModalDetails,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    NzButtonModule,
    NzSelectModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    NzCarouselModule,
  ],
    providers: [
        {provide: NZ_I18N, useValue: en_US}
    ],
  exports: [
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
