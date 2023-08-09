import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';


@NgModule({
  declarations: [
    FilterComponent,
    FilterBoxComponent
  ],
  imports: [
    CommonModule,
    FilterRoutingModule,
    SharedModule
  ]
})
export class FilterModule { }
