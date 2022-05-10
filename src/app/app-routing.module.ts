import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1SharedModule } from 'projects/app1/src/app/app.module';
import { App2SharedModule } from 'projects/app2/src/app/app.module';
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  // {
  //   path: "", pathMatch: 'full', component: DashboardComponent,
  //   children: [
  //     { path: 'admin', loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.App1SharedModule) },
  //     { path: 'pharmacy', loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.App2SharedModule) },
  //   ]
  // },
  { path: 'admin', loadChildren: () => import('../../projects/app1/src/app/app.module').then(m => m.App1SharedModule) },
  { path: 'pharmacy', loadChildren: () => import('../../projects/app2/src/app/app.module').then(m => m.App2SharedModule) },
  // { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  App1SharedModule.forRoot(),
  App2SharedModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
