import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'fooldal',
        loadChildren: () => import('../fooldal/fooldal.module').then( m => m.FooldalPageModule)
      }
    ]},
      {
        path: '',
        redirectTo: '/menu/fooldal'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
