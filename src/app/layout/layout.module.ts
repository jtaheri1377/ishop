import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './site-layout/header/header.component';
import { MainComponent } from './site-layout/main/main.component';
import { FooterComponent } from './site-layout/footer/footer.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { SuggestionBoxComponent } from './site-layout/header/suggestion-box/suggestion-box.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SiteLayoutComponent,
    SuggestionBoxComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
  ],
  exports: [
    SiteLayoutComponent
  ]
})
export class LayoutModule { }
