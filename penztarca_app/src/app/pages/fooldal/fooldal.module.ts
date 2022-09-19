import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooldalPageRoutingModule } from './fooldal-routing.module';

import { FooldalPage } from './fooldal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooldalPageRoutingModule
  ],
  declarations: [FooldalPage]
})
export class FooldalPageModule {}
