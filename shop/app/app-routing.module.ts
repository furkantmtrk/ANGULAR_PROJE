import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'products',component: ProductComponent},
  {path:'product-add-1',component: ProductAddForms1Component},
  {path:'product-add-2',component: ProductAddForms1Component},
  {path:'',redirectTo : 'products',pathMatch:'full'},
  {path:'products/ategory/:categoryId',component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
