import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceBookPage } from './service-book';

@NgModule({
  declarations: [
    ServiceBookPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceBookPage),
  ],
})
export class ServiceBookPageModule {}
