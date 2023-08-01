import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

import { SharedRoutingModule } from './shared-routing.module';
import { OverlayDirective } from './directives/overlay.directive';
import { LocationComponent } from './components/location/location.component';
import { VCartComponent } from './components/v-cart/v-cart.component';

SwiperCore.use([Pagination, Navigation, Autoplay]);


@NgModule({
  declarations: [
    OverlayDirective,
    LocationComponent,
    VCartComponent
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
    MatRippleModule,
    MatMenuModule,
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
    LeafletModule,
    MatRippleModule,
    MatMenuModule,
    VCartComponent
  ]
})
export class SharedModule { }
