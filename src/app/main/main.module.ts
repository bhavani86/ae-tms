import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './main.component';
// import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MatToolbarModule],
})
export class MainModule {}
