import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';

const routes: Routes = [{ path: 'topic-list', component: TopicListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademicRoutingModule {}
