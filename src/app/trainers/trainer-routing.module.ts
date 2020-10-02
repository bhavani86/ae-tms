import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainersComponent } from './add-trainers/add-trainers.component';
import { TrainersListComponent } from './trainers-list/trainers-list.component';

const routes: Routes = [
  { path: 'trainer-list', component: TrainersListComponent },
  { path: 'addtrainers', component: AddTrainersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainerRoutingModule {}
