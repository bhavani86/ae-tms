import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { CentersComponent } from './centers/centers.component';
import { ProjectsComponent } from './projects/projects.component';

import { MatTableModule } from '@angular/material/table';
import { AddCentersComponent } from './add-centers/add-centers.component';
import { AddBatchesComponent } from './add-batches/add-batches.component';
import { AddProjectsComponent } from './add-projects/add-projects.component';

const routes: Routes = [
  { path: 'centers', component: CentersComponent },
  { path: 'batches', component: BatchesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'add-center', component: AddCentersComponent },
  { path: 'add-batch', component: AddBatchesComponent },
  { path: 'add-project', component: AddProjectsComponent },
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forChild(routes), MatTableModule],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
