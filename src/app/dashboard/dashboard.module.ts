import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CentersComponent } from '../dashboard/centers/centers.component';
import { BatchesComponent } from '../dashboard/batches/batches.component';
import { StudentsComponent } from '../dashboard/students/students.component';
import { ProjectComponent } from './project/project.component';
import { CenterTableListComponent } from './center-table-list/center-table-list.component';
import { MapComponent } from './map/map.component';
// import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DashboardComponent,
    CentersComponent,
    BatchesComponent,
    StudentsComponent,
    ProjectComponent,
    CenterTableListComponent,
    MapComponent,
    // MatTableModule,
  ],
  imports: [CommonModule],
})
export class DashboardModule {}
