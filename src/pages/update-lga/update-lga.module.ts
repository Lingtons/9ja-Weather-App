import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateLgaPage } from './update-lga';

@NgModule({
  declarations: [
    UpdateLgaPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateLgaPage),
  ],
  exports: [
    UpdateLgaPage
  ]
})
export class UpdateLgaPageModule {}
