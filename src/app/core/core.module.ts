import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import { ContentComponent } from './content/content.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {NzSelectModule} from "ng-zorro-antd/select";
import {OurWorksComponent} from "../components/our-works/our-works.component";
import {OurProductsComponent} from "../components/our-products/our-products.component";
import {ReviewsComponent} from "../components/reviews/reviews.component";
import {LogoComponent} from "../shared/logo/logo.component";
import {OurWorkComponent} from "../components/our-works/our-work/our-work.component";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {SharedModule} from "../shared/shared.module";
import {NzButtonModule} from "ng-zorro-antd/button";

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    OurWorksComponent,
    OurProductsComponent,
    ReviewsComponent,
    LogoComponent,
    OurWorkComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    OurWorksComponent,
  ],
  imports: [
    CommonModule,
    NzCarouselModule,
    NzSelectModule,
    NzMenuModule,
    SharedModule,
    NzButtonModule,
  ]
})
export class CoreModule { }
