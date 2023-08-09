import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FirstSliderComponent } from './first-slider/first-slider.component';
import { CategorySliderComponent } from './category-slider/category-slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    FirstSliderComponent,
    CategorySliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
