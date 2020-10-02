import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainersComponent } from './trainers.component';
import { TrainerRoutingModule } from './trainer-routing.module';

@NgModule({
  declarations: [TrainersComponent],
  imports: [CommonModule, TrainerRoutingModule],
})
export class TrainerModule {}
