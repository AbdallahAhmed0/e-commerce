import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  {
    path:'product',
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
