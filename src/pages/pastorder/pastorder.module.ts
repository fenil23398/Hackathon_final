import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastorderPage } from './pastorder';

@NgModule({
  declarations: [
    PastorderPage,
  ],
  imports: [
    IonicPageModule.forChild(PastorderPage),
  ],
})
export class PastorderPageModule {}
