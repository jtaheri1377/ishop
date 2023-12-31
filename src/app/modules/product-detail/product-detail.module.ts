import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { ItemComponent } from './comments/item/item.component';
import { SpecifyComponent } from './specify/specify.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    CommentsComponent,
    ItemComponent,
    SpecifyComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule
  ]
})
export class ProductDetailModule { }
