import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainRoutingModule } from './main/main-routing.module';
import { AdministrationModule } from './administration/administration.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    DashboardModule,
    MainRoutingModule,
    AdministrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
