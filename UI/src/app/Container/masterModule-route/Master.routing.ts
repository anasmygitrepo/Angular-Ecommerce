import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartdetailComponent } from '../cartdetail/cartdetail.component';

const routes: Routes = [{ path: 'cartdata', component: CartdetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployRouting {}
