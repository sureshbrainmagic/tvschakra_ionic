import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PungerPage } from './punger.page';

const routes: Routes = [
  {
    path: '',
    component: PungerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PungerPageRoutingModule {}
