import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation } from 'swiper';

import { SharedRoutingModule } from './shared-routing.module';
import { OverlayDirective } from './directives/overlay.directive';
import { LocationComponent } from './components/location/location.component';

SwiperCore.use([Pagination, Navigation,]);


@NgModule({
  declarations: [
    OverlayDirective,
    LocationComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SwiperModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    LeafletModule
  ],
  exports: [
    SwiperModule,
    LocationComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayDirective,
    MatTooltipModule,
    MatBadgeModule,
    MatSidenavModule,
    LeafletModule
  ]
})
export class SharedModule { }
