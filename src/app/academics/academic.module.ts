import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicsComponent } from './academics.component';
import { AcademicRoutingModule } from './academic-routing.module';

@NgModule({
  declarations: [AcademicsComponent],
  imports: [CommonModule, AcademicRoutingModule],
})
export class AcademicModule {}
