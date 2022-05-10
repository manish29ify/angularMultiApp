import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "cart-home", component: HomeComponent },
  { path: "**", pathMatch: "full", redirectTo: "cart-home" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
