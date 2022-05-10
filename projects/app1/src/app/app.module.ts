import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    View1Component,
    View2Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders<App1SharedModule> {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
