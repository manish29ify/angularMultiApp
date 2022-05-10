import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
  {
    path: 'pharmacy', component: NavComponent, children: [
      { path: 'one', component: View1Component },
      { path: 'two', component: View2Component },

    ]
  },
  { path: 'pharmacy', redirectTo: 'pharmacy/one' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
