import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CentersComponent } from '../centers/centers.component';
import { BatchesComponent } from '../batches/batches.component';
import { StudentsComponent } from '../students/students.component';
import { ProjectsComponent } from '../projects/projects.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CentersComponent,
    BatchesComponent,
    StudentsComponent,
    ProjectsComponent
  ],
  imports: [CommonModule],
})
export class DashboardModule {}
