import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'home', redirectTo: '' },
  { path: 'explore/:id', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule) },
  { path: 'explore/t/:table', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule) },
  { path: 's', loadChildren: () => import('./modules/filter/filter.module').then(m => m.FilterModule) },
  { path: 'detail/:id', loadChildren: () => import('./modules/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'basket', loadChildren: () => import('./modules/basket/basket.module').then(m => m.BasketModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
