import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentersComponent } from './centers/centers.component';
import { BatchesComponent } from './batches/batches.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdministrationComponent } from './administration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CentersComponent,
    BatchesComponent,
    ProjectsComponent,
    AdministrationComponent,
  ],
  imports: [CommonModule, MatSidenavModule, FormsModule],
})
export class AdministrationModule {}
