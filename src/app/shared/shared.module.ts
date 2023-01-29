import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {NzCardModule} from "ng-zorro-antd/card";

@NgModule({
  declarations: [
    ProductComponent,
  ],
  exports: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
  ]
})
export class SharedModule { }
