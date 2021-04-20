import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCuestionayComponent } from './list-cuestionay/list-cuestionay.component';

const routes: Routes = [
  { path: '', component:  ListCuestionayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
