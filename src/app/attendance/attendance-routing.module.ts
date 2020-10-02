import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchreportsComponent } from './batchreports/batchreports.component';
import { DayreportComponent } from './dayreport/dayreport.component';

const routes: Routes = [
  { path: 'dayrepoart', component: DayreportComponent },
  { path: 'batchreports', component: BatchreportsComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
