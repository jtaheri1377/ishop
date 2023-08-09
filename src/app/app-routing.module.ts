import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'explore', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule) },
  { path: 's', loadChildren: () => import('./modules/filter/filter.module').then(m => m.FilterModule) },
  { path: 'detail', loadChildren: () => import('./modules/product-detail/product-detail.module').then(m => m.ProductDetailModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
