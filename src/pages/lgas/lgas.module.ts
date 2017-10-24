import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LgasPage } from './lgas';

@NgModule({
  declarations: [
    LgasPage,
  ],
  imports: [
    IonicPageModule.forChild(LgasPage),
  ],
  exports: [
    LgasPage
  ]
})
export class LgasPageModule {}
