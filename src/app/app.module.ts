import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1SharedModule }
  from "../../projects/app1/src/app/app.module";
import { App2SharedModule }
  from "../../projects/app2/src/app/app.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu'
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderDirective } from './directives/loader.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoaderDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
