import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
  {
    path: "admin", component: NavComponent, children: [
      { path: 'one', component: View1Component },
      { path: 'two', component: View2Component },
      { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
    ]
  },
  { path: 'admin', redirectTo: 'admin/one', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
