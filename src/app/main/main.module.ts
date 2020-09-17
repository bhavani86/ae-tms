import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
// import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MatToolbarModule, MainRoutingModule],
})
export class MainModule {}
