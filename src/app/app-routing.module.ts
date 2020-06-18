import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CategoryComponent} from './category/category.component';
import {CartComponent} from './cart/cart.component';
import {ProductsComponent} from './products/products.component';


const routes: Routes = [{path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
