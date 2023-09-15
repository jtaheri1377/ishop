import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { SwiperModule } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation, Autoplay, Virtual, Lazy } from 'swiper';

import { OverlayDirective } from './directives/overlay.directive';
import { VCartComponent } from './components/vertical-cart-slider/v-cart/v-cart.component';
import { HCartComponent } from './components/horizontal-cart-slider/h-cart/h-cart.component';
import { HorizontalCartSliderComponent } from './components/horizontal-cart-slider/horizontal-cart-slider.component';
import { VerticalCartSliderComponent } from '../shared/components/vertical-cart-slider/vertical-cart-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

SwiperCore.use([Pagination, Navigation, Autoplay, Lazy, Virtual]);


@NgModule({
  declarations: [
    OverlayDirective,
    VCartComponent,
    HCartComponent,
    HorizontalCartSliderComponent,
    VerticalCartSliderComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    MatBadgeModule,
    MatRippleModule,
    MatMenuModule,
    MatCheckboxModule,
    MatBottomSheetModule,
    MatSliderModule,
    LeafletModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SwiperModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    OverlayDirective,
    MatTooltipModule,
    MatBadgeModule,
    MatSidenavModule,
    MatSliderModule,
    LeafletModule,
    MatRippleModule,
    MatCheckboxModule,
    MatMenuModule,
    VCartComponent,
    HorizontalCartSliderComponent,
    VerticalCartSliderComponent,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent
  ]
})
export class SharedModule { }
