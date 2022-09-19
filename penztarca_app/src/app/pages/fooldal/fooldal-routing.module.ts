import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooldalPage } from './fooldal.page';

const routes: Routes = [
  {
    path: '',
    component: FooldalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooldalPageRoutingModule {}
