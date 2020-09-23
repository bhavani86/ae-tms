import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from '../administration/administration.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  // { path: 'mains', component: MainComponent },
  // { path: 'mains/dashboard', component: DashboardComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
